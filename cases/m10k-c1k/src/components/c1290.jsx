import React from 'react';
const LABEL_1290 = 'component_1290';
export function Component1290({ value = 1290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1290, 'data-value': derived.doubled }, children);
}
export default Component1290;
