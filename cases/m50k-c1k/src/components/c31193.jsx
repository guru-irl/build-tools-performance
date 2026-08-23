import React from 'react';
const LABEL_31193 = 'component_31193';
export function Component31193({ value = 31193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31193, 'data-value': derived.doubled }, children);
}
export default Component31193;
