import React from 'react';
const LABEL_33665 = 'component_33665';
export function Component33665({ value = 33665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33665, 'data-value': derived.doubled }, children);
}
export default Component33665;
