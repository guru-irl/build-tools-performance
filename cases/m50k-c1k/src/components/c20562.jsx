import React from 'react';
const LABEL_20562 = 'component_20562';
export function Component20562({ value = 20562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20562, 'data-value': derived.doubled }, children);
}
export default Component20562;
