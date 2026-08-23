import React from 'react';
const LABEL_13655 = 'component_13655';
export function Component13655({ value = 13655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13655, 'data-value': derived.doubled }, children);
}
export default Component13655;
