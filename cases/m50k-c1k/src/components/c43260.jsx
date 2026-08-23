import React from 'react';
const LABEL_43260 = 'component_43260';
export function Component43260({ value = 43260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43260, 'data-value': derived.doubled }, children);
}
export default Component43260;
