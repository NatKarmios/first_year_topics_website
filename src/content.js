import React from 'react'
import Page from 'components/Page'

export const introAndOverview = () => (
    <Page>
        Intro and overview

        Who are we? Robots!
        What do we want? Better cheaper navigation systems!
        When do we want them? Now!

        The system in question, being developed at Imperial College London as you read this here sentence,
        is an incremental step towards allowing machines to "understand" the environments they operate in.
        Using a single webcam feed as input, the system uses a deep learning technique to estimate
        how far away a certain pixel is as well as to which entity it belongs to.
        This improves upon existing systems which, for the most part, use two cameras,
        LIDAR, ultrasound and other more expensive sensors.
    </Page>);


export const motivation = () => (
    <Page>
        Why do we care?

        Robots are becoming increasingly commonplace across almost all fields.
        Automated vacuum cleaners, for instance, can be found in not just a few households and offices.
        In such less-than-critical, less-than-dangerous consumer applications,
        it is important to keep costs relatively low without compromising on quality of operation.
        As, in most cases, much of the cost is in the sensor and navigation systems, it is thus logical that
        further development of these would be a good place to start for making such technologies
        more accessible and increasing adoption.
    </Page>);

export const explanation = () => (
    <Page>
        How does it work?

        The new system uses a technique - known in technical speak as "Compact Semantic Representation
        using Variational Autoencoders" - which transforms an image into an estimation of depth as well
        as a series of semantic masks. We'll get down what this all means in a moment,
        but first here are some pictures of our depth estimations and semantic masks.
    </Page>);

export const semanticsMeaning = () => (
    <Page>
        Semantics - a fancy word for "meaning" (obviously with its nuances).

        In the case of our robots, it roughly translates to realising that a single,
        double and bunk bed are all in fact "beds", despite looking different and having different attributes.
        An unrelated example would be realising that a passage of text in its entirety alluding to death
        despite none of the individual words mentioning it directly.
    </Page>);


export const constantSemanticRepresentationMeaning = () => (
    <Page>
        Compact semantic representation - trying to convey the most meaning in a very small space.

        They say a picture is worth a thousand words - we want to encode it with 32 numbers.

        There is a catch though: once you've encoded it, you have to be able to decode it back to get the original input.
    </Page>);

export const VaeMeaning = () => (
    <Page>
        Variational Autoencoders (VAEs) - a type of artificial neural network that's very good at finding
        compact semantic representations. We (the research community) don't really understand what goes on
        in the neural network so for now we can treat it as a magical box that takes inputs and spits out outputs.
        It can "learn" to give the desired outputs by being shown examples of input-output pairs.
    </Page>);


export const VaeExample = () => (
    <Page>
        Let's concretify this with an example.

        We want to "train" a neural network to multiply numbers by two. We first come up with some examples
        of correct multiplication by two: (1,2), (2,4), (5,10), (69, 138), (420, 840).

        We give the neural network the first numbers of these pairs and ask it to predict the second.
        The neural networks gives totally ludicrous results (perhaps saying that two multiplied by two
        is negative seven-hundred-and-thirty-four).

        The neural network is then shown the correct outputs and adjusts itself
        to be better using a technique called "backpropagation".

        This repeats a few times until the neural network has "learnt" to multiply by two.
    </Page>);

export const VaeMeaningCont = () => (
    <Page>
        A VAE can be thought as two neural networks that work together in a clever way.

        They are connected together such that the output of the first neural network (let's call it P)
        is the input of the second (let's call it Q). P takes high dimensional data
        (data with lots of columns and rows - imagine a big spreadsheet) and encodes itvg
        into a lower dimensional "latent representation" (imagine taking the aforementioned spreadsheet
        and compressing it into a single cell). Now Q takes the latent representation
        (with a bit of random noise added) from P and attempts to decode it such that it obtains the original input to P.

        As the neural networks "train", Q learns to better decode the latent representations
        while P learns to help Q by producing better latent representations.
        After a while, the input to P and output from Q become pretty indistinguishable
        which means we can now use P on its own to convert inputs into nice latent representations.
    </Page>);

export const VaeExampleCont = () => (
    <Page>
        Again, let's make this concrete with an example.

        The school cafeteria wants to implement a new system through which students can pay by looking into a camera.
        The camera should detect their faces. The only problem: how do we work out who's who?

        We whip out our VAE and train it to encode everyone's faces into 100 numbers.
        When a student looks at the camera, it produces a latent representation of the face and compares it to its database.
        It then identifies the student and subtracts £2.50 from their account.
    </Page>);
