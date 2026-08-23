import React from 'react';
const LABEL_32235 = 'component_32235';
export function Component32235({ value = 32235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32235, 'data-value': derived.doubled }, children);
}
export default Component32235;
