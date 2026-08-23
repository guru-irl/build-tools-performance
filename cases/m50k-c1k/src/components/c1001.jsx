import React from 'react';
const LABEL_1001 = 'component_1001';
export function Component1001({ value = 1001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1001, 'data-value': derived.doubled }, children);
}
export default Component1001;
