import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_ext_001 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_ext_001:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_ext_001 is activated!');
  }
};

export default plugin;
