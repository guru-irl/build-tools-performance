import React from 'react';
const LABEL_33236 = 'component_33236';
export function Component33236({ value = 33236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33236, 'data-value': derived.doubled }, children);
}
export default Component33236;
