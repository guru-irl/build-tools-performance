import React from 'react';
const LABEL_34056 = 'component_34056';
export function Component34056({ value = 34056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34056, 'data-value': derived.doubled }, children);
}
export default Component34056;
