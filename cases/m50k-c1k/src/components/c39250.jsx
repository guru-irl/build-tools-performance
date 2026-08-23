import React from 'react';
const LABEL_39250 = 'component_39250';
export function Component39250({ value = 39250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39250, 'data-value': derived.doubled }, children);
}
export default Component39250;
