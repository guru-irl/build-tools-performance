import React from 'react';
const LABEL_42056 = 'component_42056';
export function Component42056({ value = 42056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42056, 'data-value': derived.doubled }, children);
}
export default Component42056;
