import React from 'react';
const LABEL_38631 = 'component_38631';
export function Component38631({ value = 38631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38631, 'data-value': derived.doubled }, children);
}
export default Component38631;
