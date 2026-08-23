import React from 'react';
const LABEL_32902 = 'component_32902';
export function Component32902({ value = 32902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32902, 'data-value': derived.doubled }, children);
}
export default Component32902;
