import React from 'react';
const LABEL_11904 = 'component_11904';
export function Component11904({ value = 11904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11904, 'data-value': derived.doubled }, children);
}
export default Component11904;
