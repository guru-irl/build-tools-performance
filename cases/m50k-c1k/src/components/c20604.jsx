import React from 'react';
const LABEL_20604 = 'component_20604';
export function Component20604({ value = 20604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20604, 'data-value': derived.doubled }, children);
}
export default Component20604;
