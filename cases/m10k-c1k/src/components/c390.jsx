import React from 'react';
const LABEL_390 = 'component_390';
export function Component390({ value = 390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_390, 'data-value': derived.doubled }, children);
}
export default Component390;
