import React from 'react';
const LABEL_45180 = 'component_45180';
export function Component45180({ value = 45180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45180, 'data-value': derived.doubled }, children);
}
export default Component45180;
