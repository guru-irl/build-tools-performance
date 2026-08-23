import React from 'react';
const LABEL_39141 = 'component_39141';
export function Component39141({ value = 39141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39141, 'data-value': derived.doubled }, children);
}
export default Component39141;
