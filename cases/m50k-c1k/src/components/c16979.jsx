import React from 'react';
const LABEL_16979 = 'component_16979';
export function Component16979({ value = 16979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16979, 'data-value': derived.doubled }, children);
}
export default Component16979;
