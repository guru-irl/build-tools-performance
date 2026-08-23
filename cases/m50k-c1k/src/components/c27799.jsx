import React from 'react';
const LABEL_27799 = 'component_27799';
export function Component27799({ value = 27799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27799, 'data-value': derived.doubled }, children);
}
export default Component27799;
