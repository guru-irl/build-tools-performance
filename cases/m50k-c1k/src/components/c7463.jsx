import React from 'react';
const LABEL_7463 = 'component_7463';
export function Component7463({ value = 7463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7463, 'data-value': derived.doubled }, children);
}
export default Component7463;
