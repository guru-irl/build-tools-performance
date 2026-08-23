import React from 'react';
const LABEL_5231 = 'component_5231';
export function Component5231({ value = 5231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5231, 'data-value': derived.doubled }, children);
}
export default Component5231;
