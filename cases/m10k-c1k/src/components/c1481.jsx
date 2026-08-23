import React from 'react';
const LABEL_1481 = 'component_1481';
export function Component1481({ value = 1481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1481, 'data-value': derived.doubled }, children);
}
export default Component1481;
