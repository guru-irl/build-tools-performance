import React from 'react';
const LABEL_31373 = 'component_31373';
export function Component31373({ value = 31373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31373, 'data-value': derived.doubled }, children);
}
export default Component31373;
