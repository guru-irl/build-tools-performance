import React from 'react';
const LABEL_46122 = 'component_46122';
export function Component46122({ value = 46122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46122, 'data-value': derived.doubled }, children);
}
export default Component46122;
