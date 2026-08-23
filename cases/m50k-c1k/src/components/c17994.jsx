import React from 'react';
const LABEL_17994 = 'component_17994';
export function Component17994({ value = 17994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17994, 'data-value': derived.doubled }, children);
}
export default Component17994;
