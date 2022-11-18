package com.smart.project.proc;

import com.smart.project.annotation.Master;
import com.smart.project.common.vo.MenuVO;
import com.smart.project.web.home.vo.TestVO;
import com.smart.project.web.home.vo.locationVO;
import com.smart.project.web.home.vo.mango2VO;
import com.smart.project.web.home.vo.mangoVO;
import org.apache.ibatis.annotations.SelectProvider;
import org.springframework.stereotype.Component;

import java.util.List;

@Master
@Component
public interface Test {
	/**********************************************************************************************
	 * @Method 설명 : Test_Mapper.xml에 있는 쿼리를 사용 할 경우
	 * @작성일 : 2021-02-15
	 * @작성자 : 김남현
	 * @변경이력 :
	 **********************************************************************************************/
	List<TestVO> sqlMenu2(String userId);

    void insertMangoJson(List<mangoVO> mangoVOList);

    List<mangoVO> selectMango();
	List<mango2VO> selectMango2(String mainmenu);
}
