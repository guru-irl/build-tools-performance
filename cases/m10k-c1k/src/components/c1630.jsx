import React from 'react';
const LABEL_1630 = 'component_1630';
export function Component1630({ value = 1630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1630, 'data-value': derived.doubled }, children);
}
export default Component1630;
