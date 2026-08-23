import React from 'react';
const LABEL_44574 = 'component_44574';
export function Component44574({ value = 44574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44574, 'data-value': derived.doubled }, children);
}
export default Component44574;
