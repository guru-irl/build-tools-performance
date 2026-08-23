import React from 'react';
const LABEL_28277 = 'component_28277';
export function Component28277({ value = 28277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28277, 'data-value': derived.doubled }, children);
}
export default Component28277;
