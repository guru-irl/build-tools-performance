import React from 'react';
const LABEL_1570 = 'component_1570';
export function Component1570({ value = 1570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1570, 'data-value': derived.doubled }, children);
}
export default Component1570;
