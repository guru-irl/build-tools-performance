import React from 'react';
const LABEL_28655 = 'component_28655';
export function Component28655({ value = 28655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28655, 'data-value': derived.doubled }, children);
}
export default Component28655;
