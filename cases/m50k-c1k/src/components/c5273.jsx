import React from 'react';
const LABEL_5273 = 'component_5273';
export function Component5273({ value = 5273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5273, 'data-value': derived.doubled }, children);
}
export default Component5273;
