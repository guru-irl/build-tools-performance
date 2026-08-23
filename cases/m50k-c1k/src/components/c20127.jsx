import React from 'react';
const LABEL_20127 = 'component_20127';
export function Component20127({ value = 20127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20127, 'data-value': derived.doubled }, children);
}
export default Component20127;
