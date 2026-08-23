import React from 'react';
const LABEL_1640 = 'component_1640';
export function Component1640({ value = 1640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1640, 'data-value': derived.doubled }, children);
}
export default Component1640;
