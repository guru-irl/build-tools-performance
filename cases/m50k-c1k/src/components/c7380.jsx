import React from 'react';
const LABEL_7380 = 'component_7380';
export function Component7380({ value = 7380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7380, 'data-value': derived.doubled }, children);
}
export default Component7380;
