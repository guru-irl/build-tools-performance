import React from 'react';
const LABEL_37990 = 'component_37990';
export function Component37990({ value = 37990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37990, 'data-value': derived.doubled }, children);
}
export default Component37990;
