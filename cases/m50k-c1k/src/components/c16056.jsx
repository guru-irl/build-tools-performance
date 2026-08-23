import React from 'react';
const LABEL_16056 = 'component_16056';
export function Component16056({ value = 16056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16056, 'data-value': derived.doubled }, children);
}
export default Component16056;
