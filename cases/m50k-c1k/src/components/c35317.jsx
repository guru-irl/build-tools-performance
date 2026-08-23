import React from 'react';
const LABEL_35317 = 'component_35317';
export function Component35317({ value = 35317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35317, 'data-value': derived.doubled }, children);
}
export default Component35317;
