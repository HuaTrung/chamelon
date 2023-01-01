import React, { Component } from "react";

import {
  Box,
  Text,
  Button,
  TextInput,
  Page,
  PageContent,
  Heading,
  Paragraph,
  Grid,
  Form,
  FormField
} from "grommet";
export default class AskingName extends Component {
  constructor(props) {
    super(props);
  }
  joinGame = () => {
    this.props.login();
    this.props.renderPage("splash");
  };
  render() {
    return (
      <div>
        <Page background="background-front" kind="narrow">
          <PageContent>
            <Grid
              rows="small"
              columns={{ count: "fit", size: "small" }}
              gap="small"
            >
              <Heading>Chameleon</Heading>

              <Box
                align="center"
                background={{
                  image: "url(https://i.imgur.com/MZAGZHm.png)",
                  repeat: "no-repeat",
                  size: "contain",
                }}
                repeat="no-repeat"
                size="cover"
              ></Box>
            </Grid>
            <Paragraph>
              To unmask the Chameleon without giving away the secret word. If
              you are the Chameleon then your mission is to blend in with the
              other players, avoid detection and work out the secret word.
            </Paragraph>
            <Box background="white" pad="medium" gap="small" margin="medium">
              <Form
                onSubmit={this.joinGame} 
              >
                <FormField label="Label" htmlFor="text-input">
                  <TextInput
                    id="text-input"
                    placeholder="placeholder"
                    value={this.props.changeName}
                  />
                </FormField>
                <Button type="submit" label="submit" />
              </Form>
              <Text>Name</Text>
              <TextInput
                style={{ width: "40%" }}
                size="large"
                direction="row-responsive"
                gap="small"
              />
              <Button color="neutral-4" label="Go" onClick={this.joinGame} />
            </Box>
          </PageContent>
        </Page>

        {/* <Box
            background={{
              color: "neutral-4",
            }}
          >
            <div>
              <Text>Name</Text>
              <input onChange={this.props.changeName} />
            </div>
            <button onClick={this.joinGame}>GO</button>
          </Box> */}
        {/* 
        <div className="brand">
          <h1>Chameleon</h1>
        </div>
        <div>
          <p>
            To unmask the Chameleon without giving away the secret word. If you
            are the Chameleon then your mission is to blend in with the other
            players, avoid detection and work out the secret word.
          </p>
        </div>
        <div className="button-group">
          <div>
            <label>Name</label>
            <input onChange={this.props.changeName} />
          </div>
          <button className="button--default" onClick={this.joinGame}>
            GO
          </button>
        </div> */}
      </div>
    );
  }
}
