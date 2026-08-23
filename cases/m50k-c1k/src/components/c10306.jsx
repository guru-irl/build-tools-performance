import React from 'react';
const LABEL_10306 = 'component_10306';
export function Component10306({ value = 10306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10306, 'data-value': derived.doubled }, children);
}
export default Component10306;
