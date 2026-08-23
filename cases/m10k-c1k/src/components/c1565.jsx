import React from 'react';
const LABEL_1565 = 'component_1565';
export function Component1565({ value = 1565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1565, 'data-value': derived.doubled }, children);
}
export default Component1565;
