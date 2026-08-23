import React from 'react';
const LABEL_28231 = 'component_28231';
export function Component28231({ value = 28231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28231, 'data-value': derived.doubled }, children);
}
export default Component28231;
