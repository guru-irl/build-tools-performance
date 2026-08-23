import React from 'react';
const LABEL_1812 = 'component_1812';
export function Component1812({ value = 1812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1812, 'data-value': derived.doubled }, children);
}
export default Component1812;
