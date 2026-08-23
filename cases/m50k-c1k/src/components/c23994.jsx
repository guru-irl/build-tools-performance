import React from 'react';
const LABEL_23994 = 'component_23994';
export function Component23994({ value = 23994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23994, 'data-value': derived.doubled }, children);
}
export default Component23994;
