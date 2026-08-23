import React from 'react';
const LABEL_20649 = 'component_20649';
export function Component20649({ value = 20649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20649, 'data-value': derived.doubled }, children);
}
export default Component20649;
