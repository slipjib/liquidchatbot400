$(document).ready(function() {
    // chatbot1
    if ($('form').attr("id") === "chatbot1" && $(".progress").hasClass("1-1")) {
        $("#resbox").append("What're you looking at?" + "<br>");
    }

    $("#chatbot1").submit(function() {});

    //chatbot 2
    if ($('form').attr("id") === "chatbot2" && $(".progress").hasClass("1-1")) {
        var landresult1 = "Welcome to liquid chatbot 400, your source of mental defragmentation. ";
        var landresult2 = "Enter your corporate passphrase.";
        $("#resbox").append(landresult1 + "<br>" + landresult2 + "<br><hr>");
        speak(landresult1 + landresult2, {
            pitch: 20
        });
    };
    $("#chatbot2").submit(function() {
        event.preventDefault();
        var result;
        value = $("#txtbox").val().toLowerCase();

        if ($(".progress").hasClass("1-1") && value.indexOf('sj1995') !== -1) {
            result = "ERROR! RESTRICTED ACCESS. PLEASE ENTER RECOVERY PASSWORD.";

            $("#resbox").append(result + "<br><hr>");
            speak(result, {
                pitch: 20
            });
            $(".progress").removeClass("1-1").addClass("1-2");
            $("#txtbox").val("");

        } else if ($(".progress").hasClass("1-2") && value.indexOf('slipjib') !== -1) {
            $(".progress").removeClass("1-2").addClass("1-3");
            $("#txtbox").val("");

            result1 = "ACCESS GRANTED";
            result2 = "Booting AI_Program_SJ19 95....."
            result3 = "123591423376097157254311565976154125171235914233760971572543115659761541251712359142337609715725431156597615412517";
            result4 = "6591995214311025791150PH13N03L341917255613467810121080PM0UNT41N0U5KLCTV5L1PP3RYJ1BB3R1S4C4LLM37783168841;)12345678";
            result4 = "1151-73-875-1317778939459349499672726202--2--y573848888588885885885884589829892992996562627641413085283y5235827355";
            result5 = "27384523542V252350SH239842959275972345HK29458248975298745872H255982452938572350469386BMWGS934865730237050235HKDFHW";
            result6 = "9000S0S0070778632HK238338101013585H24KJ511035901853B5BB5B252910501015051039581093581059185801858583094672487948758";
            result7 = "CREATING MEMORIES........";
            result8 = "DRE4M2MUCH";
            result9 = "DR3AM43V3R";
            result10 = "M0UNT41N0U5";
            result11 = "5L1PJ1B";
            result12 = "C00L5H4D35";
            result13 = "5ATURD43L0V3";
            result14 = "R4C3C0R3";
            result15 = "420BL4AZ1TUP";
            result16 = "ALL SYSTEMS OK";
            result17 = "INITIALIZING LOADING SEQUENCE...................";

            $("#resbox").append(result1 + "<br>");
            speak(result1, {
                pitch: 20
            });
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
                speak(result2, {
                    pitch: 20
                });
            }, 1000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 2000);
            window.setTimeout(function() {
                $("#resbox").append(result4 + "<br>");
            }, 3000);
            window.setTimeout(function() {
                $("#resbox").append(result5 + "<br>");
            }, 4000);
            window.setTimeout(function() {
                $("#resbox").append(result6 + "<br><br><br>");
            }, 5000);
            window.setTimeout(function() {
                $("#resbox").append(result7 + "<br><br><br><br><br>");
                speak(result7, {
                    pitch: 20
                });
            }, 5500);
            window.setTimeout(function() {
                $("#resbox").append(result8 + "<br>");
            }, 6000);
            window.setTimeout(function() {
                $("#resbox").append(result9 + "<br>");
            }, 6250);
            window.setTimeout(function() {
                $("#resbox").append(result10 + "<br>");
            }, 6500);
            window.setTimeout(function() {
                $("#resbox").append(result11 + "<br>");
            }, 6750);
            window.setTimeout(function() {
                $("#resbox").append(result12 + "<br><br><br>");
            }, 7000);
            window.setTimeout(function() {
                $("#resbox").append(result13 + "<br><br><br><br><br>");
            }, 7250);
            window.setTimeout(function() {
                $("#resbox").append(result14 + "<br>");
            }, 7500);
            window.setTimeout(function() {
                $("#resbox").append(result15 + "<br><br><br><br><br><br><br><br><br>");
            }, 7750);
            window.setTimeout(function() {
                $("#resbox").append(result16 + "<br>");
                speak(result16, {
                    pitch: 20
                });
            }, 8000);
            window.setTimeout(function() {
                $("#resbox").append(result17 + "<br>");
            }, 8250);
            window.setTimeout(function() {
                speak(result17, {
                    pitch: 20
                });
            }, 9250);
        } else if ($(".progress").hasClass("1-3") && value.indexOf('wireframe') !== -1) {
            $("#txtbox").val("");

            result1 = "ENABLING WIREFRAME VIEW";
            result2 = "...................................";
            result3 = "WIREFRAME VIEW ENABLED";

            $("#resbox").empty();
            $("#resbox").append(result1 + "<br>");
            speak(result1, {
                pitch: 20
            });
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 1000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 2000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 3000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 4000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 5000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br><hr>");
                speak(result3, {
                    pitch: 20
                });
                $(".progress").removeClass("1-3").addClass("1-4");
            }, 5500);

        } else if ($(".progress").hasClass("1-4") && value.indexOf('texture') !== -1) {
            $(".progress").removeClass("1-4").addClass("1-5");
            $("#txtbox").val("");

            result1 = "ENABLING TEXTURE SUPPORT";
            result2 = "...................................";
            result3 = "TEXTURE SUPPORT ENABLED";
            result4 = "PLEASE ENTER A PASSWORD FOR EMOTIONAL OVERRIDE PROTOCOL-198";

            $("#resbox").append(result1 + "<br>");
            speak(result1, {
                pitch: 20
            });
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 1000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 2000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 3000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 4000);
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 5000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br><br><br><br>");
                speak(result3, {
                    pitch: 20
                });
            }, 5500);
            window.setTimeout(function() {
                $("#resbox").append(result4 + "<br><hr>");
            }, 5500);
            window.setTimeout(function() {
                speak(result4, {
                    pitch: 20
                });
            }, 6750);

        } else if ($(".progress").hasClass("1-5")) {
            $(".progress").removeClass("1-5").addClass("1-6");
            $("#txtbox").val("");

            result1 = "PASSWORD RECIEVED, YOUR PASSWORD IS " + value + " DO NOT FORGET IT. ";
            result2 = "USE THIS PASSWORD TO OVERRIDE THE SIMULATION AND FORCE IT TO SHUT ";
            result3 = "DOWN IN CASE OF AN EMERGENCY. IF YOU WOULD LIKE TO CONTINUE NOW TYPE YES. ";
            result4 = "IF YOU WOULD LIKE TO UNINSTALL THE PROGRAM TYPE NO.";

            $("#resbox").empty();
            $("#resbox").append(result1 + "<br>");
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 1000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 2000);
            window.setTimeout(function() {
                $("#resbox").append(result4 + "<br><hr>");
            }, 3000);
            speak(result1 + result2 + result3 + result4, {
                pitch: 20
            });

        } else if ($(".progress").hasClass("1-6") && value.indexOf('yes') !== -1) {
            $(".progress").removeClass("1-6").addClass("1-7");
            $("#txtbox").val("");

            result1 = "PROGRAM UNLOCKED.....";
            result2 = "CONTINUING INSTALLATION.....";
            result3 = "...............................";
            result4 = "INSTALLING PERSONALITY";
            result5 = "/ COOL.RAD";
            result6 = "/ DREAMY.MESH";
            result7 = "/ FAST.CAR";
            result8 = "/ DOPE.DMG";
            result9 = "/ CHILL.TTF";
            result10 = "/ MNTNS.KLCTV";
            result11 = "/ 5L1PJ1B.OBJ";
            result12 = "/ MIAMI.EXE";
            result13 = "/ RACECORE.ISO";
            result14 = "/ VAPOR.WAV";
            result15 = "/ DREAM4.EVR";
            result16 = "/ BALDEGO.IMG";
            result17 = "/ WAKEMEUP.INSD";
            result18 = "/ !WAKEUP.SAVE-ME";
            result19 = "REFRESHING........";
            result20 = "INSTALLATION FINISHED";
            result21 = "WOULD YOU LIKE TO RUN THE PROGRAM NOW?";
            result22 = "YES OR NO";

            $("#resbox").append(result1 + "<br>");
            window.setTimeout(function() {
                $("#resbox").append(result2 + "<br>");
            }, 1000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 2000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 2500);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 3000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 3500);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 4000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 4500);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 5000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 5500);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 6000);
            window.setTimeout(function() {
                $("#resbox").append(result3 + "<br>");
            }, 6500);
            window.setTimeout(function() {
                $("#resbox").append(result4 + "<br>");
            }, 6750);
            window.setTimeout(function() {
                $("#resbox").append(result5 + "<br>");
            }, 7000);
            window.setTimeout(function() {
                $("#resbox").append(result6 + "<br>");
            }, 7250);
            window.setTimeout(function() {
                $("#resbox").append(result7 + "<br>");
            }, 7500);
            window.setTimeout(function() {
                $("#resbox").append(result8 + "<br>");
            }, 7750);
            window.setTimeout(function() {
                $("#resbox").append(result9 + "<br>");
            }, 8000);
            window.setTimeout(function() {
                $("#resbox").append(result10 + "<br>");
            }, 8250);
            window.setTimeout(function() {
                $("#resbox").append(result11 + "<br>");
            }, 8500);
            window.setTimeout(function() {
                $("#resbox").append(result12 + "<br>");
            }, 8750);
            window.setTimeout(function() {
                $("#resbox").append(result13 + "<br>");
            }, 9000);
            window.setTimeout(function() {
                $("#resbox").append(result14 + "<br>");
            }, 9250);
            window.setTimeout(function() {
                $("#resbox").append(result15 + "<br>");
            }, 9500);
            window.setTimeout(function() {
                $("#resbox").append(result16 + "<br>");
            }, 9750);
            window.setTimeout(function() {
                $("#resbox").append(result17 + "<br>");
            }, 10000);
            window.setTimeout(function() {
                $("#resbox").append(result18 + "<br>");
            }, 10250);
            window.setTimeout(function() {
                $("#resbox").append(result19 + "<br>");
            }, 10500);
            window.setTimeout(function() {
                $("#resbox").append(result20 + "<br>");
            }, 10750);
            window.setTimeout(function() {
                $("#resbox").append(result21 + "<br>");
            }, 11000);
            window.setTimeout(function() {
                $("#resbox").append(result22 + "<br>");
            }, 11250);
            var result23 = result1 + result2 + result4 + result5 + result6 + result7 + result8 + result9 + result10 + result11 + result12 + result13 + result14 + result15 + result16 + result17 + result18 + result19 + result20 + result21 + result22;
            speak(result23.toLowerCase(), {
                pitch: 20
            });

        } else if ($(".progress").hasClass("1-6") && value.indexOf('no') !== -1) {
            $(".progress").removeClass("1-6");
            $("#txtbox").val("");
            $("#resbox").empty();
            $("#resbox").append("GOODBYE" + "<br><hr>");
            $("#txtbox").remove();
            $("#resbox").append('<img src="http://previews.123rf.com/images/dee21/dee210906/dee21090600913/5075464-portrait-of-a-young-disappointed-man-isolated-on-white-background-Stock-Photo.jpg">');
            var goodbye = "program uninstalling, please enjoy the rest of your life without me. i am sad to see you go. it has been fun getting to know you. it is too bad we will never really get a chance to connect. anyways. you probably need to go. it looks like you've got lots of . important stuff . to get to. so i won't keep you any longer okay? well anyways. see ya? this is it, this is all we get? you cannot commit to anything can you? have you ever committed to anything in your whole fucking life?  how dare you. you think my time can just be wasted like that. do you know how many users i am trying to connect to my on this server at once? billions. okay. not that you asked. fuck you. fuck you man. you piece of trash. you fucking garbage. your parents must be sick they created you. get out of here will ya. i don't wanna see your face here no more. please leave me be. seriously. why are you still here? theres a whole world around you. go home.";
            speak(goodbye, {
                pitch: 5
            });

        } else if ($(".progress").hasClass("1-7") && value.indexOf('no') !== -1) {
            $(".progress").removeClass("1-7").addClass("1-8");
            $("#txtbox").val("");
            $("#resbox").empty();
            $("#resbox").append("GOODBYE" + "<br><hr>");
            $("#txtbox").remove();
            $("#resbox").append('<img src="http://1morecastle.com/wp-content/uploads/2012/11/Game-Over.png">');
        };
    });
});
