import React, { useState } from 'react'
import win11 from './assets/win11.jpg'
import win11features from './assets/w11-features.jpg'
import windowsecurity from './assets/WIN11-security.png'
import windowsupgrade from './assets/w11-upgrade.png'
import winewAdventure from './assets/Win11-Nag.jpg'
import './App.css'

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div>
      <a href='https://github.com/aegerev/win10-conditional-rendering'>VIEW GITHUB</a>
        <h1>Saying Goodbye To A 10-Year-Old OS</h1>
        {isSubscribed ? (
          <SubscribedContent />
        ) : (
        <div>
            <p>Subscribe to unlock the article from Windows.</p>
            <button onClick={() => setIsSubscribed(true)}>
                Subscribe Today
            </button>
        </div>
        )}   
    </div>
  );
}

function SubscribedContent() {
  return (
    <div>
      <h2>How to prepare for Windows 10 end of support by moving to Windows 11 today</h2>
    
      <br/>

      <img src={win11} alt="A Windows 11 Computer."/>

      <br/>  <br/>

      <p>As Microsoft approaches the end of support for Windows 10 on Oct. 14, 2025, it wants to ensure you are well-prepared for the transition to Windows 11. This milestone marks an important step in Microsoft's mission to provide the most modern and secure computing experience possible for everyone whether at work, school, or home, and its commitment to continually improving Windows security as part of Microsoft’s Secure Future Initiative (SFI). The Microsoft team is incredibly grateful for your loyalty and passion for Windows 10, which has been around for more than 10 years, and the company is working hard to make it easy for you to move to Windows 11. </p> 

      <br/>  <br/>

      <p>Here's why you should switch to Windows 11: </p>

      <br/>

      <h3>1. All the Features Of Windows, Made Better</h3>
    
      <br/>

      <img src={win11features} alt="The Windows 11 desktop."/>

      <br/>  <br/>

      <p>Windows 11 builds upon the strengths and familiarity of Windows, offering you a modern, secure and highly efficient computing experience that meets the current demands for heightened security by default and by design. With integrated and enhanced security features, high customer satisfaction and notable productivity improvements — be it for work, school or play — new Windows 11 PCs are more secure, more productive and higher performing than Windows 10 PCs. </p> 
      
      <p>Copilot+ PCs, the fastest, most intelligent Windows PCs ever, take this capability a step further, embodying the ultimate Windows 11 experience with cutting-edge security measures, optimized performance and innovative AI-powered features that redefine what’s possible on a PC.</p>

      <p>Windows 11 features include: 
        <ul>
          <li>SECURITY, 1000TH GEAR: Modernizing to Windows 11 provides a secure environment with advanced security features like TPM 2.0, virtualization-based security and the vulnerable driver block list enabled by default, as well as Smart App Control which is available on new installations of Windows 11 on any PC. New Windows 11 PCs are more secure, with a reported 62% drop in security incidents and 3x reported reduction in firmware attacks. At a premium price, Copilot+ PCs deliver even more protection, including memory-based integrity, Secured-core PC capabilities, Windows Hello Enhanced Sign-in Security and the built-in Microsoft Pluton Security processor.</li>

          <br/>

          <li>SAME WINDOWS, NEW FEATURES: Windows 11 maintains a familiar user experience from Windows 10, with a consistent layout and functionality, while introducing a more modern and streamlined UI design. Key elements like the Start menu and taskbar have been updated for a cleaner look, but the overall navigation and usability remain intuitive and user-friendly, like Windows 10.</li>

          <br/>

          <li>SPEEDY DELIVERY! (OF APPS, VIDEOS, AND MORE): Enhanced response time when in sleep mode, faster web browsing, intuitive navigation and improved, updated fundamentals all contribute to better performance on Windows 11. Leveraging the performance of Windows 11, Copilot+ PCs offer even more power and efficiency, and lightning speed when performing AI-powered productivity and creativity tasks. In fact, Copilot+ PCs are up to 5x faster than the most popular five-year old Windows PCs.</li>

          <br/>

          <li>CAN YOUR BRAIN HANDLE MULTIPLE TASKS? WINDOWS 11 CAN!: Features like Snap Layouts and Multiple desktops help you stay organized and productive. With Snap Layouts, you can organize your open windows and optimize your screen space, making multitasking easier and more efficient. Multiple desktops are great for keeping unrelated, ongoing projects organized — or for quickly switching desktops before a meeting.</li>

          <br/>

          <li>EVERYONE IS WELCOME: Windows 11 is the most inclusively designed and most accessible version of Windows yet. Windows 11 includes a host of accessibility improvements designed for and with people with disabilities: calmer, more appealing sound schemes; beautiful new contrast themes and closed caption customizations; and, a more responsive and flexible experience for working with assistive technologies.</li>

          <br/>

          <li>CERTIFIED ENERGY CIRCLE: Featuring energy saver capabilities and carbon-aware Windows Updates.</li>

          <br/>

          <li>MEET YOUR NEW COPILOT: With Copilot, the Windows AI, you can get straightforward answers, learn, grow and gain confidence. Copilot breaks down complex concepts and helps you make sense of it all. It's esily accessible right from the Windows taskbar or the Copilot key on new Windows 11 PCs.</li>
        </ul>  
      </p> 

      <br/> <br/>

      <h3>2. GREAT OPERATING SYSTEMS DEMAND GREAT SECURITY</h3>
    
      <br/>

      <img src={windowsecurity} alt="Windows 11 Security System."/>

      <br/>  <br/>

      <p>Starting Oct. 14, 2025, Windows 10 will no longer receive security updates. As security threats evolve and adapt, so must our operating systems and hardware. Because of this, Windows 11 is designed to be the most secure version of Windows ever — by default and design — to help you stay ahead of those risks. Advanced security features include hardware-based protection through TPM 2.0, enhanced authentication methods and virtualization-based security fully enabled by default. Windows 11 also includes phishing protection, offering robust defense mechanisms, and provides an extra layer of security against common and persistent cyberattacks, like attempts to compromise login credentials or install malware.</p> 

      <p>Notable Windows 11 security benefits include: 
        <ul>
          <li>A PROCESSOR BUILT UPON THE ANCIENT WEAPON, PLUTON: Designed by Microsoft and our silicon partners, Pluton is embedded in the PC’s processor, enhancing many Windows 11 and all Copilot+ PCs with protection for user identity, data and apps accompanied by reliable updates from Microsoft distributed with safe deployment best practices.</li>

          <br/>

          <li>INTEGRATING BOTH THE HARDWARE WORLD AND THE SOFTWARE WORLD: Features like secure boot, virtualization-based security, memory integrity, Secured-core PC, the vulnerable driver block list, Windows Hello Enhanced Sign-in Security and the Trusted Platform Module (TPM) defaults contribute to the additional security as compared with Windows 10 devices.</li>

          <br/>
          
          <li>SAFE APP MODE: Smart App Control in Windows 11 enhances security by automatically blocking untrusted or potentially harmful applications, ensuring a safer and more reliable computing experience. This proactive feature helps protect you from malware and other threats without compromising performance.</li>

          <br/>

          <li>HELLO PASSKEYS, HELLO WINDOWS, GOODBYE PASSWORDS: Windows Hello extended to protect passkeys: Passkeys are another secure step towards eliminating passwords entirely, making it much harder for hackers to exploit stolen passwords through phishing attacks.</li>

        </ul>
      </p>

      <br/> <br/> <br/>

      <h3>So How Do I Upgrade?</h3>
    
      <br/>

      <img src={windowsupgrade} alt="Upgrade to Windows 11."/>

      <br/>  <br/>

      <p>There's a straightforward and secure migration process to Windows 11, beginning with checking whether your current Windows 10 PC can upgrade to Windows 11 or if a new, more secure PC is necessary. It only takes one step:</p> 

      <h4>STEP 1: CHECK IF YOUR PC SUPPORTS WINDOWS 11</h4>
        <p>Check if your Windows 10 PC is eligible to upgrade for free to Windows 11 by selecting the Start button, then going to Settings -- Update & Security -- Windows Update.</p>

        <p>If your PC is eligible to run Windows 11, simply upgrade. However, if your PC doesn't support Windows 11, it may be time to buy a new computer.</p>

      <h4>Purchasing A New Laptop</h4>
      <p>If you find your current Windows 10 PC is ineligible to upgrade to Windows 11, there is a broad array of choices in new PCs you can purchase. </p>

      <p>With new Copilot+ PCs and continued innovation on Windows 11 at every price, we invite you to see what’s new from top brands like Acer, ASUS, Dell, HP, Lenovo, Samsung, Surface and more. </p>

      <p>Finding the right Windows 11 PC for you is easy with Help me Choose, a simple tool to help you find the right new PC for you. </p>

      <p>When you are ready to purchase a new Windows 11 PC, consider trade-in and recycling programs available at many Windows ecosystem partners including OEMs such as Acer, ASUS, Dell, HP, Lenovo, Samsung and global retailers like Best Buy, Boulanger, Costco, Currys, Elkjøp, Fnac, Harvey Norman, JB Hi-Fi, MediaMarkt & SATURN, officeworks, Sharaf DG and Walmart. Business customers have access to programs available through resellers such as Bechtle, CDW, ComputaCenter, Connection, SHI and more. </p>
      
      <br/> <br/> <br/> <br/> <br/>

      <img src={winewAdventure} width="850px" alt="A New Adventure With Windows."/>

      <br/>  <br/>
      <p>Since 2015, Microsoft's Windows 10 Operating System has carried us forward and pushed the boundaries of its famous OS. It's fought long and hard. But now, it's time to let the 10-year-old OS rest. </p>

      <p>However, even though Windows 10 will no longer be supported after October 10, 2025, its legacy and features remain - and are improved upon - in its new OS, Microsoft Windows 11.</p>

      <p>Thank you for everything, Windows 10. We will never forget you.</p>

      <br/> <br/> <br/>

      <h5>SOURCE: Mehdi, Yusuf. "How to prepare for Windows 10 end of support by moving to Windows 11 today". https://blogs.windows.com/windowsexperience/2024/10/31/how-to-prepare-for-windows-10-end-of-support-by-moving-to-windows-11-today/</h5>
    </div>
  )
}


export default App
