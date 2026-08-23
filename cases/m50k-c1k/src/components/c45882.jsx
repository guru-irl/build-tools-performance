import React from 'react';
const LABEL_45882 = 'component_45882';
export function Component45882({ value = 45882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45882, 'data-value': derived.doubled }, children);
}
export default Component45882;
