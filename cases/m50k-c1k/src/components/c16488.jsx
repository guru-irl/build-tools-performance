import React from 'react';
const LABEL_16488 = 'component_16488';
export function Component16488({ value = 16488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16488, 'data-value': derived.doubled }, children);
}
export default Component16488;
