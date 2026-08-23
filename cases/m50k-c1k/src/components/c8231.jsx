import React from 'react';
const LABEL_8231 = 'component_8231';
export function Component8231({ value = 8231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8231, 'data-value': derived.doubled }, children);
}
export default Component8231;
