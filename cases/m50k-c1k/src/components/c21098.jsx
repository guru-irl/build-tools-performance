import React from 'react';
const LABEL_21098 = 'component_21098';
export function Component21098({ value = 21098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21098, 'data-value': derived.doubled }, children);
}
export default Component21098;
