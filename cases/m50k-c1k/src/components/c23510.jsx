import React from 'react';
const LABEL_23510 = 'component_23510';
export function Component23510({ value = 23510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23510, 'data-value': derived.doubled }, children);
}
export default Component23510;
