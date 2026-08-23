import React from 'react';
const LABEL_31061 = 'component_31061';
export function Component31061({ value = 31061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31061, 'data-value': derived.doubled }, children);
}
export default Component31061;
