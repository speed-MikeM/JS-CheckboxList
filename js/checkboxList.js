// Version: 0.1.0
// Creator: Mike M.
// Start Project: 01-05-2018 (d-m-Y)
// Last Update: 23-05-2018 (d-m-Y)
// Library Link & Documentation: https://github.com/speed-MikeM/JS-CheckboxList

function has_sub_checkboxes(el){
	var hasSubEls = false;
  var parentEl = el.parentNode
  //console.log(parentEl.querySelector("ul"));
  if(parentEl.querySelector("ul") != null){
  	hasSubEls = true;
  }
	el.setAttribute('data-has-sub-elements', hasSubEls);
}

// returns false if there is no parent
// returns a checkbox element if there is a parent.
function has_parent_checkbox(el){
	var hasParentCheckbox = false;
  var parentNode = el.parentNode; //now we are in the li of the checkbox.
  parentNode = parentNode.parentNode; //now we are in the ul of the checkbox.
  parentNode = parentNode.parentNode; //now we are in the li of the uppercheckbox.

  var groupNode = parentNode; //if it's the first possible checkbox this will return the checkbox-list tag or a tag with the class/id checkboxList....

  parentNode = parentNode.querySelector("input[type='checkbox']"); //now we got the parent checkbox;

  if(typeof groupNode.hasClass != 'function'){
		groupNode.hasClass = function(className){
			return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.className);
		}
	}

  if(el == parentNode || groupNode.tagName == "CHECKBOX-LIST" || groupNode.id == "checkboxList" || groupNode.hasClass("checkboxList")){
  	return false;
  }

  return parentNode;
}

function has_Checked_Children(parentNode){
	//parentNode is the parentCheckbox.
 	var subCheckboxLists = parentNode.parentNode; //now we are in the li of the parent.
  subCheckboxLists = subCheckboxLists.querySelectorAll("ul");
  if(subCheckboxLists.length > 0){
    for(var i = 0; i < subCheckboxLists.length; i++){
      var tmpList = subCheckboxLists[i];
      var tmpCheckedCheckbox = tmpList.querySelector("input[type='checkbox']:checked");
      if(tmpCheckedCheckbox != null && tmpCheckedCheckbox != undefined){
        return true;
      }
    }
  }

  return false;
}


function change_subboxes(target, newState){
	//TODO: get list of sub checkboxes, change the checkbox style using change_checkbox function
  var subCheckboxes = target.parentNode;//No we are in the LI of the checkbox.
  subCheckboxes = subCheckboxes.querySelectorAll("input[type='checkbox']");
  if(subCheckboxes.length > 0){
    for(var i = 0; i < subCheckboxes.length; i++){
      var subCheckbox = subCheckboxes[i];
      subCheckbox.checked = newState;
    }
 	}
}

function change_Checkbox(target, newCheckState, e = null){
  var hasSubElements = target.getAttribute("data-has-sub-elements");
  target.checked = newCheckState

	if(hasSubElements == null || hasSubElements == undefined){
  	hasSubElements = false;
  }

	if(hasSubElements && e != null){
  	change_subboxes(target, newCheckState);
  }

  var parentCheckbox = has_parent_checkbox(target);
  if(parentCheckbox != false){
   	//console.log(parentCheckbox, newCheckState);
  	if(newCheckState == true){
    	change_Checkbox(parentCheckbox, true);
    }else{
    	//console.log(has_Checked_Children(parentCheckbox));
      change_Checkbox(parentCheckbox, has_Checked_Children(parentCheckbox));
    }
  }

}

function checkboxChange_event(e){
  change_Checkbox(e.target, e.target.checked, e);
}

function reload_libDiv(){
	load_lib(true);
}

function load_lib(removeEventListeners = false){
	var byTag 	= document.getElementsByTagName("checkbox-list");
  var byId		= document.getElementById("checkboxList");
  var byClass = document.getElementsByClassName("checkboxList");

  if(byTag.length > 0){
  	load_libDiv(byTag, removeEventListeners);
  }

  if(byId != undefined){
  	byId = {0: byId, length: 1};
  	load_libDiv(byId, removeEventListeners);
  }

  if(byClass.length > 0){
  	load_libDiv(byClass, removeEventListeners);
  }
}

function load_libDiv(libDiv, removeEventListeners){
	//var libDiv = document.getElementsByTagName("checkbox-list");
  if(libDiv.length > 0){
    for(var libDivI = 0; libDivI < libDiv.length; libDivI++){
      var libDivBlock = libDiv[libDivI];
      var checkboxes = libDivBlock.querySelectorAll("input[type='checkbox']");
      if(checkboxes.length > 0){
        for(var i = 0; i < checkboxes.length; i++){
          var checkbox = checkboxes[i];
          has_sub_checkboxes(checkbox);
          if(removeEventListeners){
          	checkbox.removeEventListener("click", checkboxChange_event);
            console.log("removed EventListeners");
          }

          checkbox.addEventListener("click", checkboxChange_event);
        }
      }
    }
  }
}

load_lib();
