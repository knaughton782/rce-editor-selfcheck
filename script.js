$(document).ready(function() {
  
  $("input[type='radio']").change(function() {
    var activePanel = $("div.active");
    var qsNum = activePanel.find("input[name='qsNum']").val();
    $('.qs'+qsNum+'Msg').addClass("hide");
    $(this).next().next().removeClass('hide'); 
    if ($(this).val() == 'correct') {
      activePanel.find('input[name=moveOn]').val('true');
    }
  });
  
  $('input:checkbox').change(function () {
    var activePanel = $("div.active");
    var inputValue = $(this).attr("value");
    var thisChildren = $(this).children(); 
    var thisClosest = $(this).closest(); 
    var thisFind = $(this).find(); 
    var thisNext = $(this).next(); 
    var thisNextAll = $(this).nextAll(); 
    var thisParent = $(this).parent(); 
    var thisParentNext = $(this).parent().next(); 
    var thisParents = $(this).parents(); 
    var thisPrev = $(this).prev(); 
    var thisPrevAll = $(this).prevAll(); 
    var thisSiblings = $(this).siblings(); 
    
    console.log("input: "+inputValue);
    
    activePanel.find('label:has(input:checkbox:not(:checked))').removeClass('error');
   
    
    if ((inputValue == "incorrect") && (activePanel.find('label:has(input[value="correct"]:checkbox:not(:checked))'))) {
      //selected checkbox is incorrect & the correct answer hasn't been chosen yet
      activePanel.find('label:has(input[value="incorrect"]:checkbox:checked)').addClass('error');
      activePanel.find('label:has(input[value="incorrect"]:checkbox:checked)').next().removeClass('hide');
      activePanel.find('label:has(input[value="incorrect"]:checkbox:not(:checked))').removeClass('error'); 
      activePanel.find('label:has(input[value="incorrect"]:checkbox:not(:checked))').next().addClass('hide');
      activePanel.find('input[name=moveOn]').val('false');
    } else if ((inputValue == "incorrect") && (activePanel.find('label:has(input[value="correct"]:checkbox:(:checked))'))) {
      
      activePanel.find('label:has(input[value="incorrect"]:checkbox:checked)').next().removeClass('hide');
       
      activePanel.find('label:has(input[value="incorrect"]:checkbox:not(:checked))').next().addClass('hide');
      activePanel.find('input[name=moveOn]').val('true');$(document).ready(function() {
  
  $("input[type='radio']").change(function() {
    var activePanel = $("div.active");
    var qsNum = activePanel.find("input[name='qsNum']").val();
    $('.qs'+qsNum+'Msg').addClass("hide");
    $(this).next().next().removeClass('hide'); 
  });
  
  $("input[type='checkbox'][value='incorrect']").change(function () {
    var incorrectAns = $('input[value="incorrect"]:checkbox:checked').map(function() {
      return this.value;
    }).get();
    
    if ($(this).is(':checked')) {
      $(this).parent('label').addClass('error');
      $(this).parent().next().removeClass('hide');   
      if (incorrectAns.length == 5) {
        
       
        activePanel.find('input[name=moveOn]').val('false');
      } else {
        activePanel.find('input[name=moveOn]').val('true');
      }
    
    } else {
      $(this).parent('label').removeClass('error');
      $(this).parent().next().addClass('hide'); 
    }
  });

  $("input[type='checkbox'][value='correct']").change(function () {
    if ($("input[value='correct']").is(':checked')) {
      //$("input:checkbox").prop("checked", true);
     
      $(this).prop("checked", true);
      $(this).parent().removeClass("error");
      $(this).parent().next().removeClass('hide'); 
    } else {
      $("input:checkbox").prop("checked", false);
      $("input:checkbox").parent().removeClass("error");
      $("input:checkbox").parent().next().addClass('hide'); 
    }
  });

  $(".js-quiz-answer").on('click', function() {
		$(".form-errors").remove();                // remove form error msg

		//get current panel, next panel
		var activePanel = $("div.active");
		var nextPanel = activePanel.next();
		
		//get question number(string), input type(string), input(object)
		var qsNum = activePanel.find("input[name='qsNum']").val();
		var ansType = activePanel.find("input[name='ansType']").val();
		var qs    = activePanel.find('input[name=qs'+qsNum+']:checked');
		
		switch (ansType) {
			case 'intro':  
				qsNum = 0;
				activePanel.removeClass("active").addClass("hide");
				nextPanel.removeClass("hide").addClass("active"); 
				$('.page-dots li:eq('+qsNum+')').addClass( "active" );
				break;
			case 'radio':
			case 'checkbox':
				/* if nothing selected, msg and break */
				if (qs.length == 0){
					$('.js-quiz-answer').before('<div class="form-errors"><b>Sorry, please make a choice. </b></div>');  
					break;
				}
				/* if move on, go to the next panel */
				if ( $('input[name=moveOn]').val() == 'true')  {
					activePanel.removeClass("active").addClass("hide");
					nextPanel.removeClass("hide").addClass("active"); 
					$('.page-dots li:eq('+qsNum+')').addClass( "active" );
					break;
				}

		}
	});
  
});


    } else {
      activePanel.find('label:has(input:checkbox:not(:checked))').removeClass('error');
      
      activePanel.find('label:has(input:checkbox:checked)').removeClass('error');
      
      activePanel.find('label:has(input[value="correct"]:checkbox:checked)').next().removeClass('hide');
      activePanel.find('input[name=moveOn]').val('true');
      
     
    }
    
  });
  
  
  
  $(".js-quiz-answer").on('click', function() {
    
    $(".form-errors").remove();                // remove form error msg
    //get current panel, next panel
    var activePanel = $("div.active");
    var nextPanel = activePanel.next();
    
    //get question number(string), input type(string), input(object)
    var qsNum = activePanel.find("input[name='qsNum']").val();
    var ansType = activePanel.find("input[name='ansType']").val();
    var qs    = activePanel.find('input[name=qs'+qsNum+']:checked');
    
    switch (ansType) {
      case 'intro':  
        qsNum = 0;
        activePanel.removeClass("active").addClass("hide");
        nextPanel.removeClass("hide").addClass("active"); 
        $('.page-dots li:eq('+qsNum+')').addClass( "active" );
        break;
        
      case 'radio':
        /* if nothing selected, msg and break */
        if (qs.length == 0){
          $('.js-quiz-answer').before('<div class="form-errors"><b>Please answer the question.</b></div>');  
          break;
        }
        
        // selected value is correct answer
        if (qs.val() == 'correct') {
           /* reset msgs */
           $('label').removeClass('error');     // remove color classes from label
           $(".form-errors").remove();                // remove form error msg
            
           if (qs.next().next().hasClass("hide")){
              // if the 'correct' msg is hidden, unhide it and hide previous error msgs
              $('span[class*="qs'+qsNum+'Msg"]').addClass('hide');  // hide other error msgs
              qs.next().next().removeClass('hide'); 
              
              break;
            } else {
              // correct msg has been previously displayed, hide active current panel, display next panel
              activePanel.removeClass("active").addClass("hide");
              nextPanel.removeClass("hide").addClass("active"); 
              if (nextPanel.hasClass("form-wrapper")) {
                $('div.gallery-pagination-ui').addClass("hide");
                $('button.js-quiz-answer').addClass("hide");
              } else {
                  $('.page-dots li:eq('+qsNum+')').addClass( "active" );
                  break;
              }
            }
        } else {
          break;
        }
	
        
      case 'checkbox':
        // reset error msgs
        $('label.error').removeClass('error'); 
        $('span[class*="qs'+qsNum+'Msg"]').addClass('hide');
        $(".form-errors").remove();
        
        // if nothing selected, msg and break
        if (qs.length == 0){
          $('.js-quiz-answer').before('<div class="form-errors"><b>Sorry, you can\'t skip.<br/>But guessing is allowed.</b></div>');  
          break;
        }
        // if move on is set, move on!
        if ( $('input[name=moveOn]').val() == 'true')  {
          activePanel.removeClass("active").addClass("hide");
          nextPanel.removeClass("hide").addClass("active"); 
          $('.page-dots li:eq('+qsNum+')').addClass( "active" );
          break;
        }
        
		// get all of the boxes that were checked
        var ansArray = $(".checkboxes input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
		
		// count how many were incorrect. if all 5 choices were selected, the answer is correct.
        var counter = 0; 
        for (i=0;i<ansArray.length; i++) {
          if (qs[i].value == 'incorrect') {
              counter++;
          }
        }

        if(jQuery.inArray("correct", ansArray) != -1) {
			// correct answer has been selected
            $('span.qs'+qsNum+'Msg').addClass('hide');
            qs.next().next().removeClass('hide');
            
            $('input[name=moveOn]').val('true');
        } else {
            if (counter < 5){
				// answers returned are incorrect
                qs.next().next().removeClass('hide');
                qs.next().addClass('error');
            } else {
				if ((counter == ansArray.length) && ( $('input[name=moveOn]').val() == 'false')) {
					// all of the answers have been selected, so the result is correct
					qs.next().next().removeClass('hide');
					
					$('input[name=moveOn]').val('true');
				} else if ((counter == ansArray.length) && ( $('input[name=moveOn]').val() == 'true')) {
					// all of the answers have been selected, move to the next panel
					activePanel.removeClass("active").addClass("hide");
					nextPanel.removeClass("hide").addClass("active"); 
					$('.page-dots li:eq('+qsNum+')').addClass( "active" );
				}
            }
        } 
    }
  });
  
});