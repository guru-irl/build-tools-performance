import React from 'react';
const LABEL_45027 = 'component_45027';
export function Component45027({ value = 45027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45027, 'data-value': derived.doubled }, children);
}
export default Component45027;
