import React from 'react';
const LABEL_45409 = 'component_45409';
export function Component45409({ value = 45409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45409, 'data-value': derived.doubled }, children);
}
export default Component45409;
