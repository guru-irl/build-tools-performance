import React from 'react';
const LABEL_44692 = 'component_44692';
export function Component44692({ value = 44692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44692, 'data-value': derived.doubled }, children);
}
export default Component44692;
