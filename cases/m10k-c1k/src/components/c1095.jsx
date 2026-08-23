import React from 'react';
const LABEL_1095 = 'component_1095';
export function Component1095({ value = 1095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1095, 'data-value': derived.doubled }, children);
}
export default Component1095;
