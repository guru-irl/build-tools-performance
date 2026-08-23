import React from 'react';
const LABEL_10710 = 'component_10710';
export function Component10710({ value = 10710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10710, 'data-value': derived.doubled }, children);
}
export default Component10710;
