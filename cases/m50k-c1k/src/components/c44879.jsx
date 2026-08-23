import React from 'react';
const LABEL_44879 = 'component_44879';
export function Component44879({ value = 44879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44879, 'data-value': derived.doubled }, children);
}
export default Component44879;
