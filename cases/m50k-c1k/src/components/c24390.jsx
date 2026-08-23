import React from 'react';
const LABEL_24390 = 'component_24390';
export function Component24390({ value = 24390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24390, 'data-value': derived.doubled }, children);
}
export default Component24390;
