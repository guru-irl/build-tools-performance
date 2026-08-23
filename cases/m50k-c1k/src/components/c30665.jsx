import React from 'react';
const LABEL_30665 = 'component_30665';
export function Component30665({ value = 30665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30665, 'data-value': derived.doubled }, children);
}
export default Component30665;
