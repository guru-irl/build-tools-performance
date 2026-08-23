import React from 'react';
const LABEL_45034 = 'component_45034';
export function Component45034({ value = 45034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45034, 'data-value': derived.doubled }, children);
}
export default Component45034;
