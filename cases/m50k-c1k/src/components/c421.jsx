import React from 'react';
const LABEL_421 = 'component_421';
export function Component421({ value = 421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_421, 'data-value': derived.doubled }, children);
}
export default Component421;
