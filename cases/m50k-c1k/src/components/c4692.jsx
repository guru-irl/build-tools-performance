import React from 'react';
const LABEL_4692 = 'component_4692';
export function Component4692({ value = 4692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4692, 'data-value': derived.doubled }, children);
}
export default Component4692;
