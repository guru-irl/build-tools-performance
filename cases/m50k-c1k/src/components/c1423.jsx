import React from 'react';
const LABEL_1423 = 'component_1423';
export function Component1423({ value = 1423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1423, 'data-value': derived.doubled }, children);
}
export default Component1423;
