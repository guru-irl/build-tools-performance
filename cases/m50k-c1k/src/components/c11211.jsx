import React from 'react';
const LABEL_11211 = 'component_11211';
export function Component11211({ value = 11211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11211, 'data-value': derived.doubled }, children);
}
export default Component11211;
