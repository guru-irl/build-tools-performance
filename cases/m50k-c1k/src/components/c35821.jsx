import React from 'react';
const LABEL_35821 = 'component_35821';
export function Component35821({ value = 35821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35821, 'data-value': derived.doubled }, children);
}
export default Component35821;
