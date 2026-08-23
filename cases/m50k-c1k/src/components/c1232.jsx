import React from 'react';
const LABEL_1232 = 'component_1232';
export function Component1232({ value = 1232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1232, 'data-value': derived.doubled }, children);
}
export default Component1232;
