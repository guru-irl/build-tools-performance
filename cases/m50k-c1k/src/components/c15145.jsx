import React from 'react';
const LABEL_15145 = 'component_15145';
export function Component15145({ value = 15145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15145, 'data-value': derived.doubled }, children);
}
export default Component15145;
