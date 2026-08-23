import React from 'react';
const LABEL_23976 = 'component_23976';
export function Component23976({ value = 23976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23976, 'data-value': derived.doubled }, children);
}
export default Component23976;
