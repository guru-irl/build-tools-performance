import React from 'react';
const LABEL_1953 = 'component_1953';
export function Component1953({ value = 1953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1953, 'data-value': derived.doubled }, children);
}
export default Component1953;
