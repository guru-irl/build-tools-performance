import React from 'react';
const LABEL_37692 = 'component_37692';
export function Component37692({ value = 37692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37692, 'data-value': derived.doubled }, children);
}
export default Component37692;
