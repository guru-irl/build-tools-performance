import React from 'react';
const LABEL_10976 = 'component_10976';
export function Component10976({ value = 10976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10976, 'data-value': derived.doubled }, children);
}
export default Component10976;
