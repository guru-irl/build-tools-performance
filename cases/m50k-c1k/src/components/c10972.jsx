import React from 'react';
const LABEL_10972 = 'component_10972';
export function Component10972({ value = 10972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10972, 'data-value': derived.doubled }, children);
}
export default Component10972;
