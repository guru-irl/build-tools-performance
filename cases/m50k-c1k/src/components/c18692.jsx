import React from 'react';
const LABEL_18692 = 'component_18692';
export function Component18692({ value = 18692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18692, 'data-value': derived.doubled }, children);
}
export default Component18692;
