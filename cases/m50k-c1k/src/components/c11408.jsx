import React from 'react';
const LABEL_11408 = 'component_11408';
export function Component11408({ value = 11408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11408, 'data-value': derived.doubled }, children);
}
export default Component11408;
