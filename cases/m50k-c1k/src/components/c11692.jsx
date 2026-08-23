import React from 'react';
const LABEL_11692 = 'component_11692';
export function Component11692({ value = 11692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11692, 'data-value': derived.doubled }, children);
}
export default Component11692;
