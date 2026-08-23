import React from 'react';
const LABEL_28837 = 'component_28837';
export function Component28837({ value = 28837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28837, 'data-value': derived.doubled }, children);
}
export default Component28837;
