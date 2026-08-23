import React from 'react';
const LABEL_13097 = 'component_13097';
export function Component13097({ value = 13097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13097, 'data-value': derived.doubled }, children);
}
export default Component13097;
