import React from 'react';
const LABEL_45551 = 'component_45551';
export function Component45551({ value = 45551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45551, 'data-value': derived.doubled }, children);
}
export default Component45551;
