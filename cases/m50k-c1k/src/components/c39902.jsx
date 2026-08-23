import React from 'react';
const LABEL_39902 = 'component_39902';
export function Component39902({ value = 39902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39902, 'data-value': derived.doubled }, children);
}
export default Component39902;
