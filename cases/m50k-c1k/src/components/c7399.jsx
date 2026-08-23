import React from 'react';
const LABEL_7399 = 'component_7399';
export function Component7399({ value = 7399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7399, 'data-value': derived.doubled }, children);
}
export default Component7399;
