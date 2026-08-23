import React from 'react';
const LABEL_22771 = 'component_22771';
export function Component22771({ value = 22771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22771, 'data-value': derived.doubled }, children);
}
export default Component22771;
