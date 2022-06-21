import profilePic from '../images/profile_pic.jpeg'
import settingIcon from '../images/setting.svg'
import homeIcon from '../images/home.svg'
import chatIcon from '../images/chat.svg'
import postIcon from '../images/new_post.svg'
import compassIcon from '../images/compass.svg'
import likesIcon from '../images/likes.svg'
import GridCard from '../components/GridCard'
export default function ProfilePage() {
      const postsArray = [
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',
          'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg',
          'https://www.thebalancecareers.com/thmb/UMhAJgio9uSXMNZN7uXNupWFxZk=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg',
          'https://www.thebalancecareers.com/thmb/lqjz-i1lvO2fYMVPjM75DDeizjA=/672x0/filters:max_bytes(150000):strip_icc():format(webp)/young-web-designers-working-together-at-modern-office-1199690908-b20452b370ef4a36873d2b62fbd244c1.jpg',
          'https://www.thebalancecareers.com/thmb/cntKuvQALFZNzVeRUrBEP9Hdi3w=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg',
          'https://www.thebalancecareers.com/thmb/XoGcrc7PQc_WkBrPQDjmSk-QjUk=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-731745651-5980a13e396e5a0011aacca8.jpg',

      ]
    return (
        <>
            <div className={'d-flex flex-row'}>
                <img className={'p-10px rounded-image'} src={profilePic} width={80} height={80}/>
                <div>
                    <div className={'d-flex flex-row align-items-center'}>
                        <p className={'font-size-20'}>user_id</p>
                        <img className={'m-10px'} src={settingIcon} width={24} height={24}/>
                    </div>
                    <button className={'edit-profile-btn'}>Edit Profile</button>
                </div>
            </div>
            <p className={'pl-20px font-bold m-0'}>Full Name</p>
            <p className={'pl-20px pb-10px m-0'}>Status message</p>

            <div className={'h-1px bg-d7d7d7'}></div>
            <div className={'d-flex flex-row justify-content-space-evenly centerText'}>
                <div>
                    <p className={'m-5px'}>post_count</p>
                    <p className={'m-5px color-7d7d7d'}>posts</p>
                </div>
                <div>
                    <p className={'m-5px'}>followers_count</p>
                    <p className={'m-5px color-7d7d7d'}>followers</p>
                </div>
                <div>
                    <p className={'m-5px'}>following_count</p>
                    <p className={'m-5px color-7d7d7d'}>following</p>
                </div>
            </div>
            <div className={'h-1px bg-d7d7d7'}></div>

            <div className={'d-flex justify-content-space-evenly'}>
                <img className={'p-10px'} src={homeIcon} width={24} height={24}/>
                <img className={'p-10px'} src={chatIcon} width={24} height={24}/>
                <img className={'p-10px'} src={postIcon} width={24} height={24}/>
                <img className={'p-10px'} src={compassIcon} width={24} height={24}/>
                <img className={'p-10px'} src={likesIcon} width={24} height={24}/>
            </div>

            <div className={'h-1px bg-d7d7d7'}></div>

            <div>
                <GridCard postsArray={postsArray}/>
            </div>
        </>
    )
}
