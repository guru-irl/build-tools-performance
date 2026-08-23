import React from 'react';
const LABEL_22407 = 'component_22407';
export function Component22407({ value = 22407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22407, 'data-value': derived.doubled }, children);
}
export default Component22407;
