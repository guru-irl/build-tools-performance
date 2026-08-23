import React from 'react';
const LABEL_32706 = 'component_32706';
export function Component32706({ value = 32706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32706, 'data-value': derived.doubled }, children);
}
export default Component32706;
