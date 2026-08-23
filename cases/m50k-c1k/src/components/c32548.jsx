import React from 'react';
const LABEL_32548 = 'component_32548';
export function Component32548({ value = 32548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32548, 'data-value': derived.doubled }, children);
}
export default Component32548;
