import React from 'react';
const LABEL_19937 = 'component_19937';
export function Component19937({ value = 19937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19937, 'data-value': derived.doubled }, children);
}
export default Component19937;
