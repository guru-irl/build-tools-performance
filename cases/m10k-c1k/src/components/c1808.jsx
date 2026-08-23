import React from 'react';
const LABEL_1808 = 'component_1808';
export function Component1808({ value = 1808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1808, 'data-value': derived.doubled }, children);
}
export default Component1808;
