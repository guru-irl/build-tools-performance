import React from 'react';
const LABEL_11885 = 'component_11885';
export function Component11885({ value = 11885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11885, 'data-value': derived.doubled }, children);
}
export default Component11885;
