import React from 'react';
const LABEL_32299 = 'component_32299';
export function Component32299({ value = 32299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32299, 'data-value': derived.doubled }, children);
}
export default Component32299;
