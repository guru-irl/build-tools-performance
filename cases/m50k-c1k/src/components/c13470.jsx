import React from 'react';
const LABEL_13470 = 'component_13470';
export function Component13470({ value = 13470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13470, 'data-value': derived.doubled }, children);
}
export default Component13470;
