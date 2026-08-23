import React from 'react';
const LABEL_1668 = 'component_1668';
export function Component1668({ value = 1668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1668, 'data-value': derived.doubled }, children);
}
export default Component1668;
