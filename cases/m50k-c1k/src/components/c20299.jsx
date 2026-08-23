import React from 'react';
const LABEL_20299 = 'component_20299';
export function Component20299({ value = 20299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20299, 'data-value': derived.doubled }, children);
}
export default Component20299;
