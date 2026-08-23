import React from 'react';
const LABEL_43832 = 'component_43832';
export function Component43832({ value = 43832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43832, 'data-value': derived.doubled }, children);
}
export default Component43832;
