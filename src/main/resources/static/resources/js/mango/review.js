import {detailPage} from "@/mango/detailPage";

$(()=>{
    new review();

})
export class review {
    constructor() {
        let userName = document.createElement("h3"); // �̸�
        let input = document.getElementById('review').val(); // �Է�â
        let title = document.createElement("h6"); // ����
        let status = document.createElement("p"); // ����
        let reply = document.createElement("ul"); // ��۹�ư
        let deleteButton = document.createElement("li"); // ���� ��ư
        let like = document.createElement("li"); // ���ƿ� ��ư
        let replyList = document.createElement("li"); // ��� ����Ʈ

        $(function () { // ���� �߰�
            $(document).one('click', $("#addComments"), function (e) {

                like.innerHTML = "Like";
                replyList.innerHTML = "���";
                title.innerHTML = "userName";

                let textnode = document.createTextNode(input);
                status.appendChild(textnode);
                status.prepend(title);
                status.prepend(reply);
                reply.appendChild(like);
                reply.appendChild(replyList);
                reply.appendChild(deleteButton);
                document.getElementById('addTask').appendChild(status);
                status.classList.add("statusBox");
                like.classList.add("like");
                replyList.classList.add("reply");
                let statusBox = document.createElement("div");
                //creates a button to delete status
                let removeTask = document.createElement('input');
                // adds type of which it is a button
                removeTask.setAttribute('type', 'button');
                removeTask.classList.add("removeButton");
                // sets the buttons value
                removeTask.setAttribute("value", "delete");
                // sets the button next to the status text
                deleteButton.appendChild(removeTask);
                //sets the button to remove status
                removeTask.addEventListener('click', function () {
                    status.parentNode.removeChild(status);
                }, false);
                like.addEventListener('click', function () {
                    this.classList.add("likeClicked");
                }, false);
                replyList.addEventListener('click', function () {
                    this.classList.add("likeClicked");
                    let luke = document.getElementById('addTask');
                    let skywalker = document.createElement("textarea");
                    let replied = document.createElement("p");
                    let leia = document.createElement("input");
                    leia.setAttribute('type', 'button');
                    leia.setAttribute("value", "reply");
                    leia.setAttribute("class", "removeButton");
                    skywalker.setAttribute("id", "pushReply");
                    skywalker.setAttribute("placeholder", "Reply to this comment");
                    luke.appendChild(skywalker);
                    luke.appendChild(leia);
                    luke.appendChild(replied);
                    leia.addEventListener('click', function () {
                        let replyInput = document.getElementById('pushReply').value;
                        let replyNode = document.createTextNode(replyInput);
                        replied.appendChild(replyNode);
                        if (replyInput === "") {
                            replied.classList.remove("statusBox");
                            skywalker.parentNode.removeChild(skywalker);
                            this.parentNode.removeChild(this);
                        } else {
                            let replyName = document.createElement("h6");
                            let deleteComment = document.createElement("p");
                            deleteComment.innerHTML = "Delete";
                            deleteComment.classList.add("deleteComment");
                            replyName.innerHTML = `${vo.emailName} says:`;
                            replied.prepend(replyName);
                            replied.prepend(deleteComment);
                            replied.classList.add("statusBox");
                            skywalker.parentNode.removeChild(skywalker);
                            this.parentNode.removeChild(this);
                            deleteComment.addEventListener('click', function () {
                                replied.parentNode.removeChild(replied);
                            }, false);
                        }
                    }, false);
                }, false);
            })
        });

        $(function () { // ���� �����
            $(document).one('click', $("#removeComments"), function (e) {
                console.log("sdafdfas");
                document.getElementById("inputStatus").value = "";
            })
        });

        $(function () { // ���
            $(document).one('click', '.reply', function (e) {

            });
        });
        $(function () { // ���ƿ�
            $(document).one('click', '.like-review', function (e) {
                $(this).children(`.fa-heart`).addClass('animate-like');
            });
        });
        $
        document.querySelector("aside.card").innerHTML = "";


    }
}
