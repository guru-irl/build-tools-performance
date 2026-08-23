import React from 'react';
const LABEL_23107 = 'component_23107';
export function Component23107({ value = 23107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23107, 'data-value': derived.doubled }, children);
}
export default Component23107;
