import React from 'react';
const LABEL_39796 = 'component_39796';
export function Component39796({ value = 39796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39796, 'data-value': derived.doubled }, children);
}
export default Component39796;
