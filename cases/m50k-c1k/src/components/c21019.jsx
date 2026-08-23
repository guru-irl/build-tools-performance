import React from 'react';
const LABEL_21019 = 'component_21019';
export function Component21019({ value = 21019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21019, 'data-value': derived.doubled }, children);
}
export default Component21019;
