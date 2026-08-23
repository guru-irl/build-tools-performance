import React from 'react';
const LABEL_43300 = 'component_43300';
export function Component43300({ value = 43300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43300, 'data-value': derived.doubled }, children);
}
export default Component43300;
