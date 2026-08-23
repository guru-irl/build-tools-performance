import React from 'react';
const LABEL_14235 = 'component_14235';
export function Component14235({ value = 14235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14235, 'data-value': derived.doubled }, children);
}
export default Component14235;
