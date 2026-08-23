import React from 'react';
const LABEL_1546 = 'component_1546';
export function Component1546({ value = 1546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1546, 'data-value': derived.doubled }, children);
}
export default Component1546;
