import React from 'react';
const LABEL_31212 = 'component_31212';
export function Component31212({ value = 31212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31212, 'data-value': derived.doubled }, children);
}
export default Component31212;
