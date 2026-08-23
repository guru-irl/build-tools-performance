import React from 'react';
const LABEL_15976 = 'component_15976';
export function Component15976({ value = 15976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15976, 'data-value': derived.doubled }, children);
}
export default Component15976;
