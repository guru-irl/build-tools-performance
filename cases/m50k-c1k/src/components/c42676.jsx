import React from 'react';
const LABEL_42676 = 'component_42676';
export function Component42676({ value = 42676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42676, 'data-value': derived.doubled }, children);
}
export default Component42676;
