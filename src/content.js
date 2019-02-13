import React from 'react';
import Page from './components/Page';
import Em from './components/Em';
import auvImg from './img/auv.jpg';
import graphSketch from './img/graphSketch.png';
import nnImage1 from './img/nn1.png';
import nnImage2 from './img/nn2.png';
import diagram from './img/diagram.png';
import zhiImage from './img/zhi.jpg';
import twitterIcon from './img/twitter.png';
import linkedinIcon from './img/linkedin.png';
import emailIcon from './img/email.png';



const intro = ({ key }) => (
  <Page key={key}>
    <p style={{fontSize: '1.5em', textAlign: 'center'}}>
      Who are we? <Em i>Robots!</Em>
      <br />
      What do we want? <Em i>Better cheaper navigation systems!</Em>
      <br />
      When do we want them? <Em i>Now!</Em>
    </p>

    <p>
      The system in question, being developed at Imperial College London as you read this here sentence,
      is an incremental step towards allowing machines to "understand" the environments they operate in.
      Using a single webcam feed as input, the system uses a deep learning technique to estimate how far
      away a certain pixel is as well as to which entity it belongs to. This improves upon existing systems
      which, for the most part, use two cameras, LIDAR, ultrasound and other more expensive sensors.
    </p>

    <h2>Why do we care?</h2>

    <p>
      Robots are becoming increasingly commonplace across almost all fields. Automated vacuum cleaners, for instance,
      can be found in not just a few households and offices.
      In such less-than-critical, less-than-dangerous consumer applications, it is important to keep costs relatively
      low without compromising on quality of operation. As, in most cases, much of the cost is in the sensor and
      navigation systems, it is thus logical that further development of these would be a good place to start for
      making such technologies more accessible and increasing adoption.
    </p>
  </Page>
);

const slam = ({ key }) => (
  <Page key={key}>
    <h1>What’s already been done?</h1>

    <img src={auvImg} style={{float: 'left', marginRight: '20px'}} alt="" />

    <img src={graphSketch} style={{float: 'right', marginLeft: '20px'}} alt="" />

    <p>
      It turns out that the problem of figuring out where you (a robot) are in a previously-unseen environment has
      received a lot of attention over the years and has been so important as to have earned itself the cool
      acronym <Em b>SLAM</Em> <Em i>(Simultaneous Localisation and Mapping)</Em>. Nevertheless, the problem remains a difficult
      one as there is often very little, if any, confirmation of a system’s true position, let alone the accuracy of
      the mapping part.
    </p>

    <p>
      One of the main issues with traditional SLAM systems is that they utilise and rely on only a small amount of data
      (a single gyroscope reading, for instance). Take, as an example, an autonomous underwater vehicle (AUV) belonging
      to the fictitious oil company English Petroleum (EP). The AUV navigates along an underwater oil pipeline looking
      for leaks with a chemical sensor. To inspect the pipeline effectively, the AUV is given GPS coordinates of
      waypoints along the pipeline that it must visit in order. However, a problem arises when one realises that GPS
      doesn’t work underwater.
    </p>

    <p>
      The clever EP engineers decide to fit the AUV with an accelerometer to allow it to navigate underwater based upon
      a GPS location from when it was above water and a timeline of all the forces experienced by the AUV since
      the last time GPS worked. This seems like an excellent idea until the AUV popped up thirty miles east of
      where it should have been after a week at sea on its maiden voyage. It transpires that tiny errors in the
      accelerometer had compounded over time into a thirty mile nightmare.
    </p>
  </Page>
);

const neuralNetwork = ({ key }) => (
  <Page key={key}>
    <h1>How does it work?</h1>

    <p>
      The new system uses a technique - known in technical speak as <Em i>"Compact Semantic Representation using
      Variational Autoencoders"</Em> - which transforms an image into an estimation of depth as well as a series of
      semantic masks.
      We'll get down what this all means in a moment, but first here are some pictures of our depth estimations and
      semantic masks.
    </p>

    <table style={{margin: '0 auto', textAlign: 'center'}}>
      <tbody>
      <tr>
        <td style={{paddingRight: '20px'}}>
          <img src={nnImage1} alt=""/>
          <br />
          <Em i>Depth estimation given a single-camera input. (Courtesy of Bloesch et al. 2018)</Em>
        </td>
        <td>
          <img src={nnImage2} alt=""/>
          <br />
          <Em i>Semantic mask generated from single-camera input. (Courtesy of Gould et al. 2009)</Em>
        </td>
      </tr>
      </tbody>
    </table>

    <p>
      <Em b>Semantics</Em> - a fancy word for "meaning" (obviously with its nuances). In the case of our robots, it roughly
      translates to realising that a single, double and bunk bed are all in fact "beds", despite looking different and
      having different attributes. An unrelated example would be realising that a passage of text in its entirety
      alluding to death despite none of the individual words mentioning it directly.
    </p>

    <p>
      <Em b>Compact semantic representation</Em> - trying to convey the most meaning in a very small space. They say a picture is
      worth a thousand words - we want to encode it with 32 numbers. There is a catch though: once you've encoded it,
      you have to be able to decode it back to get the original input.
    </p>

    <p>
      <Em b>Variational Autoencoders (VAEs)</Em> - a type of artificial neural network that's very good at finding compact semantic
      representations. We (the research community) don't really understand what goes on in the neural network so for now
      we can treat it as a magical box that takes inputs and spits out outputs. It can "learn" to give the desired
      outputs by being shown examples of input-output pairs.
    </p>

    <h2>Lets concretify this with an example.</h2>

    <ul>
      <li>
        We want to "train" a neural network to multiply numbers by two. We first come up with some examples of correct
        multiplication by two: (1,2), (2,4), (5,10), (69, 138), (420, 840).
      </li>

      <li>
        We give the neural network the first numbers of these pairs and ask it to predict the second. The neural
        networks
        gives totally ludicrous results (perhaps saying that two multiplied by two is negative
        seven-hundred-and-thirty-four).
      </li>

      <li>
        The neural network is then shown the correct outputs and adjusts itself to be better using a technique called
        "backpropagation".
      </li>

      <li>
        This repeats a few times until the neural network has "learnt" to multiply by two.
      </li>
    </ul>

    <p>
      A VAE can be thought as two neural networks that work together in a clever way. They are connected together such
      that the output of the first neural network (let's call it P) is the input of the second (let's call it Q). P
      takes high dimensional data (data with lots of columns and rows - imagine a big spreadsheet) and encodes it into a
      lower dimensional "latent representation" (imagine taking the aforementioned spreadsheet and compressing it into a
      single cell). Now Q takes the latent representation (with a bit of random noise added) from P and attempts to
      decode it such that it obtains the original input to P.
    </p>

    <p>
      As the neural networks "train", Q learns to better decode the latent representations while P learns to help Q by
      producing better latent representations. After a while, the input to P and output from Q become pretty
      indistinguishable which means we can now use P on its own to convert inputs into nice latent representations.
    </p>

    <h2>Again, let's make this concrete with an example.</h2>

    <ul>
      <li>
        The school cafeteria wants to implement a new system through which students can pay by looking into a camera.
      </li>

      <li>
        The camera should detect their faces. The only problem: how do we work out who's who?
      </li>

      <li>
        We whip out our VAE and train it to encode everyone's faces into 100 numbers.
      </li>

      <li>
        When a student looks at the camera, it produces a latent representation of the face and compares it to its database.
      </li>

      <li>
        It then identifies the student and subtracts £2.50 from their account.
      </li>
    </ul>
  </Page>
);

const paper = ({ key }) => (
  <Page key={key}>
    <h1>Putting things together</h1>

    <p>
      <Em>Compact Semantic Representations using Variational Autoencoders.</Em> They seemed spooky at first but we now have the
      tools to understand this. Our robots need to understand their environment: a world, to them, of arbitrary pixels.
      It thus makes sense to represent this world compact way - hence "compact semantic representation". And now do we
      do get these representations? Variational autoencoders!
    </p>

    <div style={{width: '80vw', maxWidth: '942px', textAlign: 'center', margin: '20px auto'}}>
      <img src={diagram} alt="" style={{width: '80vw', maxWidth: '942px'}} />
      <br />
      <i>
        An overview of the the system. The inner workings are kept somewhat vague here due to an ongoing patent
        application but the general structure still holds: images are passed through the encoder and converted into
        a <Em b>compact semantic representation</Em>. The representation is then decoded by two separate decoders to
        give <Em b>semantic masks</Em> and <Em b>depth estimations</Em>.
      </i>
    </div>
  </Page>
);

const furtherReading = ({ key }) => (
  <Page key={key}>
    <h1>A Q&A with Shuaifeng Zhi</h1>

    <h2>Tell us about yourself and what inspired you to undertake a PhD in this topic.</h2>

    <p>
      I became interested in deep learning and 3D computer vision when I started my master of in 2015 when deep learning
      began to show its superior performance on various 2D vision tasks. However, the application of DL in 3D vision and
      SLAM is still very promising and unexplored. I decided to learn deep learning and did some preliminary work in 3D
      shape classification. Later I know SLAM and it looks a good combination of both research and engineering efforts
      and I wanted to know more in this field but realised the time of master is quite limited. That's why I choose to
      pursue a PhD in this topic and I believe that introducing DL into SLAM is a good direction concerning both
      practicability and novelty.
    </p>

    <h2>What would be the end goal of the research?</h2>

    <p>
      Currently my aim is to design a monocular dense semantic SLAM system which is capable of joint optimising
      semantics and geometry.
    </p>

    <h2>What should I do if I want to find out more? (Further reading)</h2>

    <p>
      Papers combining DL and a SLAM system.
      <br />
      Besides CodeSLAM and SemanticFusion, there are many other works focusing on this direction,
      such as CNN-SLAM (CVPR 2017), BA-Net (ICLR 2018) and more.
      <br />
      Some SLAM systems include <Em i>Orb-SLAM</Em>, <Em i>LSD-SLAM</Em>, <Em i>KinectFusion</Em>, <Em i>ElasticFusion</Em>, and <Em i>Fusion++</Em>.
    </p>

    <p>
      <a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/1606.05830">Here is a good review paper.</a>
    </p>
  </Page>
);

const contact = ({ key }) => (
  <Page key={key} bg="rgba(0, 0, 0, 0)">
    <div>
      <table id="contact-box">
        <tbody>
        <tr>
          <td>
            <img src={zhiImage} id="contact-image" alt=""/>
          </td>
          <td>
            <h2 id="contact-name">Shuaifeng Zhi</h2>
            <h3 id="contact-address">Dyson Robotics Lab, Imperial College London</h3>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Shuaifeng_Zhi">
              <img src={twitterIcon} alt="Twitter"/>
            </a>
            &nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shuaifeng-zhi-3b4418103/">
              <img src={linkedinIcon} alt="LinkedIn"/>
            </a>
            &nbsp;&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="mailto:s.zhi17@imperial.ac.uk">
              <img src={emailIcon} alt="Email"/>
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </Page>
);

export default [
  intro,
  slam,
  neuralNetwork,
  paper,
  furtherReading,
  contact,
];