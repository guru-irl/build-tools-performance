import React from 'react';
const LABEL_32972 = 'component_32972';
export function Component32972({ value = 32972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32972, 'data-value': derived.doubled }, children);
}
export default Component32972;
