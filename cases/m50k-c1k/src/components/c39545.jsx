import React from 'react';
const LABEL_39545 = 'component_39545';
export function Component39545({ value = 39545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39545, 'data-value': derived.doubled }, children);
}
export default Component39545;
