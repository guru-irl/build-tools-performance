import React from 'react';
const LABEL_36661 = 'component_36661';
export function Component36661({ value = 36661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36661, 'data-value': derived.doubled }, children);
}
export default Component36661;
