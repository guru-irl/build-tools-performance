import React from 'react';
const LABEL_3648 = 'component_3648';
export function Component3648({ value = 3648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3648, 'data-value': derived.doubled }, children);
}
export default Component3648;
