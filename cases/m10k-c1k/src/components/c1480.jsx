import React from 'react';
const LABEL_1480 = 'component_1480';
export function Component1480({ value = 1480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1480, 'data-value': derived.doubled }, children);
}
export default Component1480;
