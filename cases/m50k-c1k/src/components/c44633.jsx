import React from 'react';
const LABEL_44633 = 'component_44633';
export function Component44633({ value = 44633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44633, 'data-value': derived.doubled }, children);
}
export default Component44633;
