import React from 'react';
const LABEL_23648 = 'component_23648';
export function Component23648({ value = 23648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23648, 'data-value': derived.doubled }, children);
}
export default Component23648;
