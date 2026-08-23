import React from 'react';
const LABEL_18551 = 'component_18551';
export function Component18551({ value = 18551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18551, 'data-value': derived.doubled }, children);
}
export default Component18551;
