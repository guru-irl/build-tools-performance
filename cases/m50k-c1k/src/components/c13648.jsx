import React from 'react';
const LABEL_13648 = 'component_13648';
export function Component13648({ value = 13648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13648, 'data-value': derived.doubled }, children);
}
export default Component13648;
