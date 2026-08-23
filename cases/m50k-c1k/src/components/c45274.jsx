import React from 'react';
const LABEL_45274 = 'component_45274';
export function Component45274({ value = 45274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45274, 'data-value': derived.doubled }, children);
}
export default Component45274;
