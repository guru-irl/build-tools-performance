import React from 'react';
const LABEL_3929 = 'component_3929';
export function Component3929({ value = 3929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3929, 'data-value': derived.doubled }, children);
}
export default Component3929;
