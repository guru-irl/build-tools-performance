import React from 'react';
const LABEL_10622 = 'component_10622';
export function Component10622({ value = 10622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10622, 'data-value': derived.doubled }, children);
}
export default Component10622;
