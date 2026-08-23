import React from 'react';
const LABEL_13283 = 'component_13283';
export function Component13283({ value = 13283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13283, 'data-value': derived.doubled }, children);
}
export default Component13283;
