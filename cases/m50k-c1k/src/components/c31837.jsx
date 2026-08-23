import React from 'react';
const LABEL_31837 = 'component_31837';
export function Component31837({ value = 31837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31837, 'data-value': derived.doubled }, children);
}
export default Component31837;
