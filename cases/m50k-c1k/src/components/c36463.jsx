import React from 'react';
const LABEL_36463 = 'component_36463';
export function Component36463({ value = 36463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36463, 'data-value': derived.doubled }, children);
}
export default Component36463;
