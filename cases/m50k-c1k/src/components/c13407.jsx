import React from 'react';
const LABEL_13407 = 'component_13407';
export function Component13407({ value = 13407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13407, 'data-value': derived.doubled }, children);
}
export default Component13407;
