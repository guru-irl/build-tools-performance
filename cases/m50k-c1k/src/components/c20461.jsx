import React from 'react';
const LABEL_20461 = 'component_20461';
export function Component20461({ value = 20461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20461, 'data-value': derived.doubled }, children);
}
export default Component20461;
