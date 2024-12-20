import Image from "next/image";
import research_01 from "@/public/images/research/research_01.png";
import research_02 from "@/public/images/research/research_02.jpg";
import research_04 from "@/public/images/research/research_04.jpg";
import research_05 from "@/public/images/research/research_05.png";
import research_06 from "@/public/images/research/research_06.png";
import research_07 from "@/public/images/research/research_07.png";
import research_08 from "@/public/images/research/research_08.png";
import research_efficient from "@/public/images/research/research_efficient.png";
import research_graph from "@/public/images/research/research_graph.png";
import research_imgcomp from "@/public/images/research/research_imgcomp.png";
import research_multimodal from "@/public/images/research/research_multimodal.png";
import research_adversarial from "@/public/images/research/research_adversarial.png";

export default function Research() {
  return (
    <div className="container">
      <div>
        <div className="page-header">
          <h3>
            <i className="fa fa-flask"></i> Research
          </h3>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_06}
              alt="Image super-resolution using deep learning"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Image super-resolution using deep learning
            </h4>
            Image super-resolution is a process to reconstruct a high-resolution
            image from a single low-resolution image. It has a wide range of
            applications in computer vision, medical imaging, satellite image
            processing, surveillance systems, etc. Recently, we have developed
            various deep learning models that significantly perform better than
            traditional methods. Our focus lies on improving perceptual quality
            and designing lightweight model architectures.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_efficient}
              alt="Efficient deep learning"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">Efficient deep learning</h4>
            Training and running deep learning models are usually expensive in
            terms of computation and memory due to their highly complex
            structures. This is a critical issue particularly when they are used
            in resource-constrained environments such as mobile and embedded
            systems. Therefore, it is highly desirable to make the models
            efficient without significant performance decrease. We are working
            on parallelized network training and model structure optimization.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_multimodal}
              alt="Multimodal deep learning"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">Multimodal deep learning</h4>
            Often, heterogeneous sensors are simultaneously involved, which
            produce multimodal data. For instance, human actions can be recorded
            by cameras, depth cameras, accelerometers, and gyroscopes at the
            same time. They are mutually complementary, thus learning from them
            is beneficial to maximize the performance. We have recently
            developed a deep learning architecture that can integrate multimodal
            data. It is not only effective in terms of performance, but also
            robust against partial absence of data and modalities.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_graph}
              alt="Deep learning for graph data"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">Deep learning for graph data</h4>
            Unlike audio, image, and video signals, some types of data are not
            well defined on the Euclidean space but need to be represented by
            graphs or graph signals, e.g., brain signals, social network data,
            sensor network data, traffic data, etc. Traditional deep neural
            networks specialized for audio or image signals cannot be used for
            those types of data. We work on developing new types of deep neural
            networks that can handle graphs and graph signals.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_adversarial}
              alt="Adversarial attacks and defenses for deep learning models"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Adversarial attacks and defenses for deep learning models
            </h4>
            Despite their good performance, deep learning models are known to be
            vulnerable to adversarial attacks appearing as small perturbation in
            the input data. We are working on this issue for various deep
            learning applications. First, we work on identifying vulnerability
            of deep learning models and understanding it theoretically and
            experimentally. Second, we work on developing defensive methods and
            robust model architectures against adversarial attacks.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_imgcomp}
              alt="Image compression using deep learning"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Image compression using deep learning
            </h4>
            Image compression is an indispensable step in most multimedia
            systems. Traditionally, standardized methods such as JPEG have been
            dominantly used, but recently deep learning has shown potential to
            outperform traditional methods. We are working on developing new
            deep learning methods for image compression. In particular, we work
            on improving image quality of the compressed images and the
            computational efficiency of deep compression/decompression models.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_01}
              alt="Subjective and objective perceptual quality assessment"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Subjective and objective perceptual quality assessment
            </h4>
            Measuring perceptual quality, known as quality of experience (QoE),
            of multimedia is fundamental for developing and evaluating various
            human-centric image and video processing algorithms. We are working
            on important issues around QoE, including developing efficient
            subjective quality evaluation methods, evaluating image/video
            compression methods, studying perceptual quality of 4K UHD, 3D,
            video scalability, benchmarking objective quality metrics, etc.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_02}
              alt="Brain-computer interface (BCI) for multimedia experience"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Brain-computer interface (BCI) for multimedia experience
            </h4>
            BCI is a powerful way to understand users&#39; perception directly
            by monitoring brain activities. We have been working on
            investigating effective BCI techniques using EEG and fNIRS for
            implict monitoring of users&#39; perception of given multimedia
            content. Here, perceptual dimensions include satisfaction, quality,
            immersiveness, emotion, sense of reality, etc. In particular, we
            focus on understanding perception for novel types of media such as
            3D, high dynamic range (HDR), 4K UHD, etc. Furthermore, peripheral
            physiological signals such as skin temperature, skin conductance,
            and heart rate are also considered, which have potential to
            complement brain activities.
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_07}
              alt="Aesthetic quality of images and videos"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Aesthetic quality of images and videos
            </h4>
            Aesthetic quality of images and videos is important for human
            perception, but not easy to automatically measure. We work on
            understanding how humans perceive aesthetic quality of visual media,
            and how such understanding can be used for automatic image and video
            processing such as aesthetic quality enhancement. We have studied
            the notion of "subjectivity" indicating the fact that for some
            images and videos, aesthetic opinions of different people vary
            significantly. We have also developed automated video editing
            methods that can generate aesthetically improved versions of
            user-generated videos.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_04}
              alt="QoE-aware video communications"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">QoE-aware video communications</h4>
            The demand for wireless video delivery is ever increasing with the
            spread of powerful portable devices. A key issue for successful
            video delivery services is how to satisfy users&#39; quality of
            experience (QoE) for the delivered content. We have been working on
            developing techniques for QoE-optimized video communications and QoE
            measurement for video communications, particularly based on
            massive-MIMO and scalable video coding (SVC).
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_05}
              alt="Visual attention analysis and modeling"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">
              Visual attention analysis and modeling
            </h4>
            The human visual attention allows to focus on a small region in the
            scene and ignore others at each time. Understanding how visual
            attention works via eye-tracking has importance in designing
            perceptually optimized multimedia processing and machine vision
            algorithms. Examples of our work on visual attention analysis
            include audio-visual focus of attention, gaze pattern analysis for
            temporal resolution changes, gaze pattern analysis for video packet
            loss, etc.
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3">
            <Image
              className="research-image"
              src={research_08}
              alt="Music recommendation"
            />
          </div>
          <div className="col-sm-9">
            <h4 className="research-header">Music recommendation</h4>
            Music streaming services are prevalent in these days. In such
            services, it is important to understand listeners&#39; satisfaction
            and recommend relevant songs at the right moment. We are seeking
            answers to various research questions such as: how to generate a
            music playlist satisfying users, how to recommend particular music
            clips based on listeners&#39; states, how to sense listeners&#39;
            response to given songs, how to predict popularity of songs, etc.
          </div>
        </div>
      </div>
    </div>
  );
}
