import React from 'react';
const LABEL_43552 = 'component_43552';
export function Component43552({ value = 43552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43552, 'data-value': derived.doubled }, children);
}
export default Component43552;
