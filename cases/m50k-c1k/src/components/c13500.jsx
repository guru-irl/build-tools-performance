import React from 'react';
const LABEL_13500 = 'component_13500';
export function Component13500({ value = 13500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13500, 'data-value': derived.doubled }, children);
}
export default Component13500;
