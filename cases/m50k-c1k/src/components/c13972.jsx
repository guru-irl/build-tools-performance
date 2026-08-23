import React from 'react';
const LABEL_13972 = 'component_13972';
export function Component13972({ value = 13972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13972, 'data-value': derived.doubled }, children);
}
export default Component13972;
