import React from 'react';
const LABEL_10977 = 'component_10977';
export function Component10977({ value = 10977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10977, 'data-value': derived.doubled }, children);
}
export default Component10977;
