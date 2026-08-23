import React from 'react';
const LABEL_20976 = 'component_20976';
export function Component20976({ value = 20976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20976, 'data-value': derived.doubled }, children);
}
export default Component20976;
