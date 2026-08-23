import React from 'react';
const LABEL_23097 = 'component_23097';
export function Component23097({ value = 23097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23097, 'data-value': derived.doubled }, children);
}
export default Component23097;
