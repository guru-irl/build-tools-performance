import React from 'react';
const LABEL_43233 = 'component_43233';
export function Component43233({ value = 43233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43233, 'data-value': derived.doubled }, children);
}
export default Component43233;
