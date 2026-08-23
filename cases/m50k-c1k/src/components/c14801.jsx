import React from 'react';
const LABEL_14801 = 'component_14801';
export function Component14801({ value = 14801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14801, 'data-value': derived.doubled }, children);
}
export default Component14801;
