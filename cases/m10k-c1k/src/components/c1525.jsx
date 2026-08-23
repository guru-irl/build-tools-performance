import React from 'react';
const LABEL_1525 = 'component_1525';
export function Component1525({ value = 1525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1525, 'data-value': derived.doubled }, children);
}
export default Component1525;
