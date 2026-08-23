import React from 'react';
const LABEL_12665 = 'component_12665';
export function Component12665({ value = 12665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12665, 'data-value': derived.doubled }, children);
}
export default Component12665;
