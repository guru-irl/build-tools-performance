import React from 'react';
const LABEL_6442 = 'component_6442';
export function Component6442({ value = 6442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6442, 'data-value': derived.doubled }, children);
}
export default Component6442;
