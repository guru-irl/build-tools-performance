import React from 'react';
const LABEL_32991 = 'component_32991';
export function Component32991({ value = 32991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32991, 'data-value': derived.doubled }, children);
}
export default Component32991;
