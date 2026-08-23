import React from 'react';
const LABEL_39631 = 'component_39631';
export function Component39631({ value = 39631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39631, 'data-value': derived.doubled }, children);
}
export default Component39631;
