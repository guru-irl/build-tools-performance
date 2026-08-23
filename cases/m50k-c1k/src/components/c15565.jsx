import React from 'react';
const LABEL_15565 = 'component_15565';
export function Component15565({ value = 15565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15565, 'data-value': derived.doubled }, children);
}
export default Component15565;
