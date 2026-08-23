import React from 'react';
const LABEL_5692 = 'component_5692';
export function Component5692({ value = 5692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5692, 'data-value': derived.doubled }, children);
}
export default Component5692;
