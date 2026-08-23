import React from 'react';
const LABEL_26132 = 'component_26132';
export function Component26132({ value = 26132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26132, 'data-value': derived.doubled }, children);
}
export default Component26132;
