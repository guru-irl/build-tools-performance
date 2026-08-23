import React from 'react';
const LABEL_14407 = 'component_14407';
export function Component14407({ value = 14407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14407, 'data-value': derived.doubled }, children);
}
export default Component14407;
