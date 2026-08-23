import React from 'react';
const LABEL_43160 = 'component_43160';
export function Component43160({ value = 43160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43160, 'data-value': derived.doubled }, children);
}
export default Component43160;
