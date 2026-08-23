import React from 'react';
const LABEL_13250 = 'component_13250';
export function Component13250({ value = 13250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13250, 'data-value': derived.doubled }, children);
}
export default Component13250;
