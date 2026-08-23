import React from 'react';
const LABEL_31551 = 'component_31551';
export function Component31551({ value = 31551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31551, 'data-value': derived.doubled }, children);
}
export default Component31551;
