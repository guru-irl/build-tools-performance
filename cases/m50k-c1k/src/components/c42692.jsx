import React from 'react';
const LABEL_42692 = 'component_42692';
export function Component42692({ value = 42692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42692, 'data-value': derived.doubled }, children);
}
export default Component42692;
