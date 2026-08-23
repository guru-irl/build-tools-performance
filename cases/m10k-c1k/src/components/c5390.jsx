import React from 'react';
const LABEL_5390 = 'component_5390';
export function Component5390({ value = 5390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5390, 'data-value': derived.doubled }, children);
}
export default Component5390;
