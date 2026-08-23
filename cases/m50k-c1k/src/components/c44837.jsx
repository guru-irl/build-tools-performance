import React from 'react';
const LABEL_44837 = 'component_44837';
export function Component44837({ value = 44837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44837, 'data-value': derived.doubled }, children);
}
export default Component44837;
