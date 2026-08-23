import React from 'react';
const LABEL_31665 = 'component_31665';
export function Component31665({ value = 31665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31665, 'data-value': derived.doubled }, children);
}
export default Component31665;
