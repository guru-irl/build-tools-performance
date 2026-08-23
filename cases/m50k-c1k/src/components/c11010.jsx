import React from 'react';
const LABEL_11010 = 'component_11010';
export function Component11010({ value = 11010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11010, 'data-value': derived.doubled }, children);
}
export default Component11010;
