import React from 'react';
const LABEL_1665 = 'component_1665';
export function Component1665({ value = 1665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1665, 'data-value': derived.doubled }, children);
}
export default Component1665;
