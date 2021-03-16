const projectId = new URL(window.location.href).searchParams.get('project');
if (projectId != null) window.location.replace("https://github.com/workonfire/" + projectId);
