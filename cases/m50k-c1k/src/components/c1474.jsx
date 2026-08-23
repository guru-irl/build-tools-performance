import React from 'react';
const LABEL_1474 = 'component_1474';
export function Component1474({ value = 1474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1474, 'data-value': derived.doubled }, children);
}
export default Component1474;
