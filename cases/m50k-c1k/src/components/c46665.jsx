import React from 'react';
const LABEL_46665 = 'component_46665';
export function Component46665({ value = 46665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46665, 'data-value': derived.doubled }, children);
}
export default Component46665;
