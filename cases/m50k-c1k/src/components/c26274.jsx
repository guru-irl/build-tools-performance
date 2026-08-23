import React from 'react';
const LABEL_26274 = 'component_26274';
export function Component26274({ value = 26274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26274, 'data-value': derived.doubled }, children);
}
export default Component26274;
