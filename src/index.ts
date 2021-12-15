import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the hello_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'hello_extension:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension hello_extension is activated!');
  }
};

export default plugin;
