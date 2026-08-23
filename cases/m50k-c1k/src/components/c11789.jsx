import React from 'react';
const LABEL_11789 = 'component_11789';
export function Component11789({ value = 11789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11789, 'data-value': derived.doubled }, children);
}
export default Component11789;
