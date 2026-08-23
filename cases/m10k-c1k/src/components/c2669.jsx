import React from 'react';
const LABEL_2669 = 'component_2669';
export function Component2669({ value = 2669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2669, 'data-value': derived.doubled }, children);
}
export default Component2669;
