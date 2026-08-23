import React from 'react';
const LABEL_13107 = 'component_13107';
export function Component13107({ value = 13107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13107, 'data-value': derived.doubled }, children);
}
export default Component13107;
