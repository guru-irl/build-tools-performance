import React from 'react';
const LABEL_32326 = 'component_32326';
export function Component32326({ value = 32326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32326, 'data-value': derived.doubled }, children);
}
export default Component32326;
