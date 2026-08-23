import React from 'react';
const LABEL_11463 = 'component_11463';
export function Component11463({ value = 11463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11463, 'data-value': derived.doubled }, children);
}
export default Component11463;
