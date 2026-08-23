import React from 'react';
const LABEL_20628 = 'component_20628';
export function Component20628({ value = 20628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20628, 'data-value': derived.doubled }, children);
}
export default Component20628;
