import React from 'react';
const LABEL_31951 = 'component_31951';
export function Component31951({ value = 31951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31951, 'data-value': derived.doubled }, children);
}
export default Component31951;
