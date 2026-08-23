import React from 'react';
const LABEL_44128 = 'component_44128';
export function Component44128({ value = 44128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44128, 'data-value': derived.doubled }, children);
}
export default Component44128;
