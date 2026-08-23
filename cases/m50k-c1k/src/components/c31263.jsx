import React from 'react';
const LABEL_31263 = 'component_31263';
export function Component31263({ value = 31263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31263, 'data-value': derived.doubled }, children);
}
export default Component31263;
