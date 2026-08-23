import React from 'react';
const LABEL_1818 = 'component_1818';
export function Component1818({ value = 1818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1818, 'data-value': derived.doubled }, children);
}
export default Component1818;
