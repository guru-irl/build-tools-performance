import React from 'react';
const LABEL_43419 = 'component_43419';
export function Component43419({ value = 43419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43419, 'data-value': derived.doubled }, children);
}
export default Component43419;
