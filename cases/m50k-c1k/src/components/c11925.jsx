import React from 'react';
const LABEL_11925 = 'component_11925';
export function Component11925({ value = 11925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11925, 'data-value': derived.doubled }, children);
}
export default Component11925;
