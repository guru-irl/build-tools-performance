import React from 'react';
const LABEL_8914 = 'component_8914';
export function Component8914({ value = 8914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8914, 'data-value': derived.doubled }, children);
}
export default Component8914;
