import React from 'react';
const LABEL_11562 = 'component_11562';
export function Component11562({ value = 11562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11562, 'data-value': derived.doubled }, children);
}
export default Component11562;
