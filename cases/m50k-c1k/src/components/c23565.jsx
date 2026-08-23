import React from 'react';
const LABEL_23565 = 'component_23565';
export function Component23565({ value = 23565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23565, 'data-value': derived.doubled }, children);
}
export default Component23565;
