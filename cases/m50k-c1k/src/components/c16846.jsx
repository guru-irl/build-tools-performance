import React from 'react';
const LABEL_16846 = 'component_16846';
export function Component16846({ value = 16846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16846, 'data-value': derived.doubled }, children);
}
export default Component16846;
