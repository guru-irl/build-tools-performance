import React from 'react';
const LABEL_13929 = 'component_13929';
export function Component13929({ value = 13929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13929, 'data-value': derived.doubled }, children);
}
export default Component13929;
