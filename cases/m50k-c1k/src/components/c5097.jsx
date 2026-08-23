import React from 'react';
const LABEL_5097 = 'component_5097';
export function Component5097({ value = 5097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5097, 'data-value': derived.doubled }, children);
}
export default Component5097;
