import React from 'react';
const LABEL_7056 = 'component_7056';
export function Component7056({ value = 7056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7056, 'data-value': derived.doubled }, children);
}
export default Component7056;
