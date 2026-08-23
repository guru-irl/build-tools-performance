import React from 'react';
const LABEL_20972 = 'component_20972';
export function Component20972({ value = 20972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20972, 'data-value': derived.doubled }, children);
}
export default Component20972;
