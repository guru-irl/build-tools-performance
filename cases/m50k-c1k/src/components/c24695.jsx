import React from 'react';
const LABEL_24695 = 'component_24695';
export function Component24695({ value = 24695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24695, 'data-value': derived.doubled }, children);
}
export default Component24695;
