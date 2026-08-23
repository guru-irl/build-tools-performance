import React from 'react';
const LABEL_23145 = 'component_23145';
export function Component23145({ value = 23145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23145, 'data-value': derived.doubled }, children);
}
export default Component23145;
