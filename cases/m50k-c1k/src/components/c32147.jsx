import React from 'react';
const LABEL_32147 = 'component_32147';
export function Component32147({ value = 32147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32147, 'data-value': derived.doubled }, children);
}
export default Component32147;
