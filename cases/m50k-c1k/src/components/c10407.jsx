import React from 'react';
const LABEL_10407 = 'component_10407';
export function Component10407({ value = 10407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10407, 'data-value': derived.doubled }, children);
}
export default Component10407;
