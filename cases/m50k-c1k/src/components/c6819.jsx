import React from 'react';
const LABEL_6819 = 'component_6819';
export function Component6819({ value = 6819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6819, 'data-value': derived.doubled }, children);
}
export default Component6819;
