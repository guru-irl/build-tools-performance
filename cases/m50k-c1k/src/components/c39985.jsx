import React from 'react';
const LABEL_39985 = 'component_39985';
export function Component39985({ value = 39985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39985, 'data-value': derived.doubled }, children);
}
export default Component39985;
