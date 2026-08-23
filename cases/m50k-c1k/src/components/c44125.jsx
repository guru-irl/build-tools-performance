import React from 'react';
const LABEL_44125 = 'component_44125';
export function Component44125({ value = 44125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44125, 'data-value': derived.doubled }, children);
}
export default Component44125;
