import React from 'react';
const LABEL_28097 = 'component_28097';
export function Component28097({ value = 28097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28097, 'data-value': derived.doubled }, children);
}
export default Component28097;
