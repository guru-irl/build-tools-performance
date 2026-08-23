import React from 'react';
const LABEL_13846 = 'component_13846';
export function Component13846({ value = 13846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13846, 'data-value': derived.doubled }, children);
}
export default Component13846;
