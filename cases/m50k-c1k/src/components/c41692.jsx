import React from 'react';
const LABEL_41692 = 'component_41692';
export function Component41692({ value = 41692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41692, 'data-value': derived.doubled }, children);
}
export default Component41692;
