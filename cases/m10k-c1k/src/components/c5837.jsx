import React from 'react';
const LABEL_5837 = 'component_5837';
export function Component5837({ value = 5837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5837, 'data-value': derived.doubled }, children);
}
export default Component5837;
