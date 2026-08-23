import React from 'react';
const LABEL_25019 = 'component_25019';
export function Component25019({ value = 25019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25019, 'data-value': derived.doubled }, children);
}
export default Component25019;
