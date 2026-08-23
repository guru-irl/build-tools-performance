import React from 'react';
const LABEL_22326 = 'component_22326';
export function Component22326({ value = 22326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22326, 'data-value': derived.doubled }, children);
}
export default Component22326;
