import React from 'react';
const LABEL_21394 = 'component_21394';
export function Component21394({ value = 21394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21394, 'data-value': derived.doubled }, children);
}
export default Component21394;
