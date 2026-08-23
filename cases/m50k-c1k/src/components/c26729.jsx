import React from 'react';
const LABEL_26729 = 'component_26729';
export function Component26729({ value = 26729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26729, 'data-value': derived.doubled }, children);
}
export default Component26729;
