import React from 'react';
const LABEL_1827 = 'component_1827';
export function Component1827({ value = 1827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1827, 'data-value': derived.doubled }, children);
}
export default Component1827;
