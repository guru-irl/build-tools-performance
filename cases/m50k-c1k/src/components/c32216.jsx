import React from 'react';
const LABEL_32216 = 'component_32216';
export function Component32216({ value = 32216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32216, 'data-value': derived.doubled }, children);
}
export default Component32216;
