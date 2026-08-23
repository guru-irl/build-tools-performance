import React from 'react';
const LABEL_40794 = 'component_40794';
export function Component40794({ value = 40794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40794, 'data-value': derived.doubled }, children);
}
export default Component40794;
