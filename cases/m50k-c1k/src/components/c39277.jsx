import React from 'react';
const LABEL_39277 = 'component_39277';
export function Component39277({ value = 39277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39277, 'data-value': derived.doubled }, children);
}
export default Component39277;
