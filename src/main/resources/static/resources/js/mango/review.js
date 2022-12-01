const review = (function(){

    //���� �ۼ� ajax
    function review(review, callback){
        $.ajax({
            type:"POST",
            url:"/buy/review",
            data:JSON.stringify(review),
            contentType:"application/json; charset=utf-8",
            success:function(result){
                if(callback){
                    callback(result);
                }
            },
            error:function(err){
                alert("���� �ۼ� ����!");
            }
        })
    }

    //���� ����
    function reviewDelete(review,callback){
        $.ajax({
            type:"POST",
            url:"/buy/reviewDelete",
            data:JSON.stringify(review),
            contentType:"application/json; charset=utf-8",
            success:function(result){
                if(callback){
                    callback(result);
                }
            },
            error:function(err){
                alert("���並 �������� ���߽��ϴ�. �ٽ� �õ��� �ּ���.");
            }
        })
    }

    //���� ����
    function reviewModify(review,callback){
        $.ajax({
            type:"PUT",
            url:"/buy/"+review.reviewnum,
            data:JSON.stringify(review),
            contentType:"application/json; charset=utf-8",
            success:function(result){
                if(callback){
                    callback(result);
                }
            },
            error:function(err){
                alert("���� ���� ����. �ٽ� �õ����ּ���~");
            }
        })
    }


    return {add:insert,addreview:review, drop:reviewDelete, modify:reviewModify};
})();