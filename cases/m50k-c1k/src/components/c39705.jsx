import React from 'react';
const LABEL_39705 = 'component_39705';
export function Component39705({ value = 39705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39705, 'data-value': derived.doubled }, children);
}
export default Component39705;
