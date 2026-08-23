import React from 'react';
const LABEL_31740 = 'component_31740';
export function Component31740({ value = 31740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31740, 'data-value': derived.doubled }, children);
}
export default Component31740;
