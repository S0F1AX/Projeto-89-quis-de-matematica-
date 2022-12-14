question_turn = "player1";
awnser_turn = "player2";

function check()
{
    get_awnser = document.getElementById("input_check_box").ariaValueMax;
    if(get_awnser == actual_awnser)
    {
        if(awnser_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("palyer1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score +1
            document.getElementById("player1_score").innerHTML = update_player2_score;
        }
        if(question_turn == "palyer1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player2_name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("palyer_question").innerHTML = "Turno de pergunta - " + player1_name
        }
    }

}