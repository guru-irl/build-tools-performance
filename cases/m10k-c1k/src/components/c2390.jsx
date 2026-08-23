import React from 'react';
const LABEL_2390 = 'component_2390';
export function Component2390({ value = 2390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2390, 'data-value': derived.doubled }, children);
}
export default Component2390;
