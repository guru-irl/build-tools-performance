import React from 'react';
const LABEL_1692 = 'component_1692';
export function Component1692({ value = 1692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1692, 'data-value': derived.doubled }, children);
}
export default Component1692;
