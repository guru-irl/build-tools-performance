import React from 'react';
const LABEL_13796 = 'component_13796';
export function Component13796({ value = 13796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13796, 'data-value': derived.doubled }, children);
}
export default Component13796;
