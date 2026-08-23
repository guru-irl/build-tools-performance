import React from 'react';
const LABEL_43664 = 'component_43664';
export function Component43664({ value = 43664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43664, 'data-value': derived.doubled }, children);
}
export default Component43664;
