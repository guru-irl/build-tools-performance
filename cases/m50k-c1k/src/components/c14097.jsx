import React from 'react';
const LABEL_14097 = 'component_14097';
export function Component14097({ value = 14097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14097, 'data-value': derived.doubled }, children);
}
export default Component14097;
