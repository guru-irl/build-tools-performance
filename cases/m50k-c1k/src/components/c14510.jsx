import React from 'react';
const LABEL_14510 = 'component_14510';
export function Component14510({ value = 14510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14510, 'data-value': derived.doubled }, children);
}
export default Component14510;
