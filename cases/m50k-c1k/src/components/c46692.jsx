import React from 'react';
const LABEL_46692 = 'component_46692';
export function Component46692({ value = 46692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46692, 'data-value': derived.doubled }, children);
}
export default Component46692;
