import styles from "./support.module.css";
import Sidebar from "../dashboard/Sidebar/sidebar";
import React, { useState } from "react";
import { ReactDOM } from "react";
import { Navbar } from "../../navbar/navbar";

function Support() {
  return (
    <div className="support-bg" style={{ marginLeft: "20px" }}>
      <div className={styles["support-page"]}>
        <br />
        <h1>
          <a id="top"></a>
          Welcome to the Support Center for [Beta App]! We're here to assist you
          with any questions or concerns you may have.{" "}
        </h1>
        <p>
          The LONI Image & Data Archive (IDA) contains data from over 100
          research studies and clinical trials, simultaneously protecting data
          from unauthorized access and providing an infrastructure for data
          sharing according to the needs of the study PIs. Please use the topics
          below to explore this page and e-mail{" "}
          <a href="mailto:ida@loni.usc.edu">ida@loni.usc.edu</a> if you have
          further questions.
        </p>
        <ul>
          <li>
            <a href="#faq">Frequently Asked Questions (FAQ)</a>
          </li>
          <li>
            <a href="#download">Downloading Files</a>
          </li>
          <li>
            <a href="#upload">Uploading Files</a>
          </li>
          <li>
            <a href="#manual">IDA Manual</a>
          </li>
        </ul>

        <table BORDER="0" WIDTH="100%" CELLPADDING="0" CELLSPACING="0">
          <tr>
            <th COLSPAN="2">
              <hr width="100%" align="left" color="#cecece"></hr>
            </th>
          </tr>
          <tr>
            <th ALIGN="left">
              <h1>
                <a id="faq"></a>FAQ
              </h1>
            </th>
            <th ALIGN="right">
              <p align="right">
                <a href="#top">TOP</a>
              </p>
            </th>
          </tr>
        </table>

        <p>
          {" "}
          <b>1. How can I become a tester on Beta App?</b>
          <br />
          To become a tester, you need to create an account on our platform.
          Once you have an account, you can browse available apps and games for
          testing, and participate in testing programs.
        </p>
        <p>
          {" "}
          <b>2. What types of apps and games can I test?</b>
          <br />
          We offer a wide variety of apps and games for testing, including
          mobile apps, web applications, and games across different platforms
          (iOS, Android, etc.). You can choose to test the ones that interest
          you the most.
        </p>
        <p>
          <b>3. How do I report a bug or issue I encounter during testing?</b>
          <br />
          You can report bugs or issues directly within the app or game you're
          testing. Look for the "Report a Bug" or "Submit Feedback" button, and
          describe the problem in detail. Your feedback will be sent to the
          developers for review.
        </p>
        <p>
          <b>
            4. Can I provide feedback on usability and user experience, or just
            technical issues?
          </b>
          <br />
          You can absolutely provide feedback on usability, user experience, and
          any other aspect of the app or game. We value all forms of feedback,
          whether it's about functionality, design, or overall user
          satisfaction.
        </p>
        <p>
          <b>
            5. How can I participate in beta testing or early access programs?
          </b>
          <br />
          Keep an eye on our platform for announcements about beta testing and
          early access opportunities. When a program is available, you'll find
          it in the testing programs section of your account, and you can apply
          to participate.
        </p>

        <p>
          <b>
            6. How can I become a developer on [Your Platform Name] and submit
            my apps for testing?
          </b>
          <br />
          Developers can apply to join our platform and submit their apps for
          testing. Visit the "Developer" section of our website to learn more
          and start the application process.
        </p>

        <p>
          <b>
            7. How do I know if my feedback has been received and addressed by
            the developers?
          </b>
          <br />
          We maintain transparency by updating the status of reported issues and
          feedback within your account dashboard. You'll be able to track the
          progress of your submissions, from receipt to resolution.
        </p>
        <p>
          <b>8. Is my personal information and data secure on your platform?</b>
          <br />
          Yes, we take data security and privacy seriously. Your personal
          information and testing data are protected in accordance with our
          strict privacy policy. We do not share your data with third parties
          without your consent.v
        </p>

        <p>
          <b>
            9. Can I contact your support team if I have additional questions or
            need assistance?
          </b>
          <br />
          Of course! Our support team is here to help. You can contact us
          through the "Contact Support" option in your account or by emailing
          <a href=""> support@yourplatform.com.</a>
        </p>

        <p>
          <b>10. How can I stay updated on platform news and announcements?</b>
          <br />
          You can follow our blog, social media accounts, and check your email
          for newsletters and announcements. We regularly share news about new
          features, testing opportunities, and platform updates.
        </p>

        <p>
          <b>Still Have Questions?</b>
          <br />
          If your question isn't answered here or you need further assistance,
          please don't hesitate to reach out to our support team. We're here to
          ensure your experience on [Your Platform Name] is the best it can be.
        </p>

        <table BORDER="0" WIDTH="100%" CELLPADDING="0" CELLSPACING="0">
          <tr>
            <th COLSPAN="2">
              <hr width="100%" align="left" color="#cecece" />
            </th>
          </tr>
          <tr>
            <th ALIGN="left">
              <h1>
                <a id="download"></a>DOWNLOADING FILES
              </h1>
            </th>
            <th ALIGN="right">
              <p align="right">
                <a href="#top">TOP</a>
              </p>
            </th>
          </tr>
        </table>
        <span style={{ color: "red" }}>
          <p>
            <b>Important:</b> For a better download experience, The IDA has
            replaced the software that performs IDA Downloads with a new and
            improved method that offers many benefits and no longer requires the
            Java Plug-in. Most browsers are changing their Plug-in support
            policies this year, while some browsers – such as Chrome – have
            recently stopped supporting Java Plug-ins. The new IDA Downloader
            relies on the built-in download functionality of the web browser and
            requires no additional software.
          </p>
        </span>

        <h2>IDA Downloader: Intro</h2>
        <ul>
          <li>Use the built-in download functionality of your web browser.</li>
          <li>
            No need to install the Java Plug-in or change browser Plug-in
            settings.
          </li>
          <li>
            Receive download time estimates based on your connection speed.
          </li>
          <li>
            Choose the the default download location in the browser
            preferences/options.
          </li>
          <li>
            Optionally split your download into multiple zip files (Advanced
            Download option).
          </li>
        </ul>

        <h2>Download Options</h2>
        <p>
          Note: Many browsers cannot pause and resume a download and must
          restart it from the beginning if your internet connection is
          interrupted; use the Advanced Download option and/or a Download
          Manager of your choice to address this issue.
        </p>

        <p>
          <span style={{ color: "white" }}>
            [1-Click Button: pls use current IDA-DEV code]
          </span>{" "}
          Use the built-in functionality of your web browser to quickly download
          all the files in your collection to a single zip file.
        </p>
        <p>
          <span style={{ color: "white" }}>
            [Advanced Button: pls use current IDA-DEV code]
          </span>{" "}
          Split your download into multiple files. Use the built-in
          functionality of your web browser to download files or use your
          favorite Download Manager software to optimize your download speed and
          experience (see About Download Managers immediately below).
        </p>

        <h2>Download Managers</h2>
        <p>
          Software applications known as Download Managers may help you manage
          your IDA downloads: they can automate downloads of multiple files and
          can keep track of large files seamlessly while you do other things or
          are away from your computer. A major advantage of most Download
          Managers is that if a download is briefly interrupted due to poor
          connectivity, that download will continue from the point where it was
          interrupted instead of restarting from the beginning.
        </p>
        <p>
          The IDA does not endorse or support any download managers and is not
          responsible for download errors or subsequent issues resulting from
          use of any third-party products. However, The IDA has tested and
          suggests the following free products for your consideration:
        </p>
        <p>
          <span style={{ color: "white" }}>
            [Downloader App Table: pls use the current IDA-DEV code]
          </span>
        </p>

        <table BORDER="0" WIDTH="100%" CELLPADDING="0" CELLSPACING="0">
          <tr>
            <th COLSPAN="2">
              <hr width="100%" align="left" color="#cecece" />
            </th>
          </tr>
          <tr>
            <th ALIGN="left">
              <h1>
                <a id="upload"></a>UPLOADING FILES
              </h1>
            </th>
            <th ALIGN="right">
              <p align="right">
                <a href="#top">TOP</a>
              </p>
            </th>
          </tr>
        </table>
        <span style={{ color: "white" }}>
          <p>
            <b>Important:</b> The IDA is presently working on a new version of
            The IDA Uploader to allow users to archive files without relying on
            the Java plug-in. The release of this new version is planned for the
            Summer 2017.
          </p>
        </span>

        <h2> Supported Browsers</h2>
        <ul>
          <li>Internet Explorer: supported (version 9 or later)</li>
          <li>
            FireFox: Version 51 and earlier only (Versions 52 and later have no
            Java plug-in)
          </li>
          <li>
            Chrome: Version 44 and earlier only (Versions 45 and later have no
            Java plug-in)
          </li>
          <li>
            Safari: supported but many versions block the Java plug-in; for more
            info visit{" "}
            <a
              href="https://support.apple.com/kb/DL1573?locale=en_US"
              target="_blank"
            >
              https://support.apple.com/kb/DL1573?locale=en_US
            </a>
          </li>
        </ul>

        <h2> Java Is Required</h2>
        <ul>
          <li>
            To test your Java plugin, visit{" "}
            <a
              href="https://www.java.com/en/download/testjava.jsp"
              target="_blank"
            >
              https://www.java.com/en/download/testjava.jsp
            </a>
          </li>
          <li>
            To download Java, visit{" "}
            <a href="https://java.com/en/download/index.jsp" target="_blank">
              https://java.com/en/download/index.jsp
            </a>
          </li>
        </ul>

        <table BORDER="0" WIDTH="100%" CELLPADDING="0" CELLSPACING="0">
          <tr>
            <th COLSPAN="2">
              <hr width="100%" align="left" color="#cecece" />
            </th>
          </tr>
          {/* <tr>
          <th ALIGN="left">
            <h1>
              <a id="manual"></a>IDA MANUAL
            </h1>
          </th>
          <th ALIGN="right">
            <p align="right">
              <a href="#top">TOP</a>
            </p>
          </th>
        </tr> */}
        </table>
        <p>
          <a
            href="https://ida.loni.usc.edu/services/Menu/PDF/IDA_User_Manual.pdf"
            target="_blank"
          >
            Click to download PDF
          </a>
        </p>
        <h2> Contact Support</h2>
        <ul>
          <li>
            Email Address{" "}
            <a href="betaapp@gmail.com" target="_blank">
              https://www.java.com/en/download/testjava.jsp
            </a>
          </li>
          <li>
            To download Java, visit{" "}
            <a href="https://java.com/en/download/index.jsp" target="_blank">
              https://java.com/en/download/index.jsp
            </a>
          </li>
        </ul>
        <br />
        <br />
      </div>
    </div>
  );
}
export default Support;
