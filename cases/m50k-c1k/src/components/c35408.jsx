import React from 'react';
const LABEL_35408 = 'component_35408';
export function Component35408({ value = 35408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35408, 'data-value': derived.doubled }, children);
}
export default Component35408;
