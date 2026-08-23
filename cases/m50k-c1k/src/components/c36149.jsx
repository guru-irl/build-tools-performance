import React from 'react';
const LABEL_36149 = 'component_36149';
export function Component36149({ value = 36149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36149, 'data-value': derived.doubled }, children);
}
export default Component36149;
