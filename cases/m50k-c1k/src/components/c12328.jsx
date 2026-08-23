import React from 'react';
const LABEL_12328 = 'component_12328';
export function Component12328({ value = 12328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12328, 'data-value': derived.doubled }, children);
}
export default Component12328;
