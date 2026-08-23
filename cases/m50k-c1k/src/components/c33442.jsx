import React from 'react';
const LABEL_33442 = 'component_33442';
export function Component33442({ value = 33442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33442, 'data-value': derived.doubled }, children);
}
export default Component33442;
