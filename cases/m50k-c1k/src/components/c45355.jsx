import React from 'react';
const LABEL_45355 = 'component_45355';
export function Component45355({ value = 45355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45355, 'data-value': derived.doubled }, children);
}
export default Component45355;
