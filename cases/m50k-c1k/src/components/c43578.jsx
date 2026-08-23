import React from 'react';
const LABEL_43578 = 'component_43578';
export function Component43578({ value = 43578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43578, 'data-value': derived.doubled }, children);
}
export default Component43578;
