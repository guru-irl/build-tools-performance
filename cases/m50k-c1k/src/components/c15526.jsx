import React from 'react';
const LABEL_15526 = 'component_15526';
export function Component15526({ value = 15526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15526, 'data-value': derived.doubled }, children);
}
export default Component15526;
