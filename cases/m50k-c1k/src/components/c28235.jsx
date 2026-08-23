import React from 'react';
const LABEL_28235 = 'component_28235';
export function Component28235({ value = 28235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28235, 'data-value': derived.doubled }, children);
}
export default Component28235;
