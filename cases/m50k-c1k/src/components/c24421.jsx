import React from 'react';
const LABEL_24421 = 'component_24421';
export function Component24421({ value = 24421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24421, 'data-value': derived.doubled }, children);
}
export default Component24421;
