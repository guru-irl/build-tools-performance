import React from 'react';
const LABEL_20277 = 'component_20277';
export function Component20277({ value = 20277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20277, 'data-value': derived.doubled }, children);
}
export default Component20277;
