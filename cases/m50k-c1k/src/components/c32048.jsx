import React from 'react';
const LABEL_32048 = 'component_32048';
export function Component32048({ value = 32048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32048, 'data-value': derived.doubled }, children);
}
export default Component32048;
