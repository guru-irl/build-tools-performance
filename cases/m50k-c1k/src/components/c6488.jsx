import React from 'react';
const LABEL_6488 = 'component_6488';
export function Component6488({ value = 6488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6488, 'data-value': derived.doubled }, children);
}
export default Component6488;
