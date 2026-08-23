import React from 'react';
const LABEL_8692 = 'component_8692';
export function Component8692({ value = 8692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8692, 'data-value': derived.doubled }, children);
}
export default Component8692;
