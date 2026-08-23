import React from 'react';
const LABEL_7764 = 'component_7764';
export function Component7764({ value = 7764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7764, 'data-value': derived.doubled }, children);
}
export default Component7764;
