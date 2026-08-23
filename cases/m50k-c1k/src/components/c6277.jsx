import React from 'react';
const LABEL_6277 = 'component_6277';
export function Component6277({ value = 6277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6277, 'data-value': derived.doubled }, children);
}
export default Component6277;
