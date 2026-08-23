import React from 'react';
const LABEL_2751 = 'component_2751';
export function Component2751({ value = 2751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2751, 'data-value': derived.doubled }, children);
}
export default Component2751;
