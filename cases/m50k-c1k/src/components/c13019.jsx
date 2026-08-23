import React from 'react';
const LABEL_13019 = 'component_13019';
export function Component13019({ value = 13019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13019, 'data-value': derived.doubled }, children);
}
export default Component13019;
