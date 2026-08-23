import React from 'react';
const LABEL_32761 = 'component_32761';
export function Component32761({ value = 32761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32761, 'data-value': derived.doubled }, children);
}
export default Component32761;
