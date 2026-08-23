import React from 'react';
const LABEL_19605 = 'component_19605';
export function Component19605({ value = 19605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19605, 'data-value': derived.doubled }, children);
}
export default Component19605;
