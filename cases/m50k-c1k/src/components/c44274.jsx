import React from 'react';
const LABEL_44274 = 'component_44274';
export function Component44274({ value = 44274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44274, 'data-value': derived.doubled }, children);
}
export default Component44274;
