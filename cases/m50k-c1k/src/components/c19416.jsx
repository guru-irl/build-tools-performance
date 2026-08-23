import React from 'react';
const LABEL_19416 = 'component_19416';
export function Component19416({ value = 19416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19416, 'data-value': derived.doubled }, children);
}
export default Component19416;
