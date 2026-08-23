import React from 'react';
const LABEL_37128 = 'component_37128';
export function Component37128({ value = 37128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37128, 'data-value': derived.doubled }, children);
}
export default Component37128;
