import React from 'react';
const LABEL_35277 = 'component_35277';
export function Component35277({ value = 35277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35277, 'data-value': derived.doubled }, children);
}
export default Component35277;
