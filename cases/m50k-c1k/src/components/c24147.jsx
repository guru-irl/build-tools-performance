import React from 'react';
const LABEL_24147 = 'component_24147';
export function Component24147({ value = 24147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24147, 'data-value': derived.doubled }, children);
}
export default Component24147;
