import React from 'react';
const LABEL_31692 = 'component_31692';
export function Component31692({ value = 31692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31692, 'data-value': derived.doubled }, children);
}
export default Component31692;
