import React from 'react';
const LABEL_32764 = 'component_32764';
export function Component32764({ value = 32764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32764, 'data-value': derived.doubled }, children);
}
export default Component32764;
