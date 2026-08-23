import React from 'react';
const LABEL_23837 = 'component_23837';
export function Component23837({ value = 23837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23837, 'data-value': derived.doubled }, children);
}
export default Component23837;
