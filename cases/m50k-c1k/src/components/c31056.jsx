import React from 'react';
const LABEL_31056 = 'component_31056';
export function Component31056({ value = 31056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31056, 'data-value': derived.doubled }, children);
}
export default Component31056;
