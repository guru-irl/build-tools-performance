import React from 'react';
const LABEL_46235 = 'component_46235';
export function Component46235({ value = 46235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46235, 'data-value': derived.doubled }, children);
}
export default Component46235;
