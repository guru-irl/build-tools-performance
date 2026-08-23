import React from 'react';
const LABEL_18951 = 'component_18951';
export function Component18951({ value = 18951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18951, 'data-value': derived.doubled }, children);
}
export default Component18951;
