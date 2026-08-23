import React from 'react';
const LABEL_45181 = 'component_45181';
export function Component45181({ value = 45181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45181, 'data-value': derived.doubled }, children);
}
export default Component45181;
