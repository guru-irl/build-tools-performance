import React from 'react';
const LABEL_5902 = 'component_5902';
export function Component5902({ value = 5902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5902, 'data-value': derived.doubled }, children);
}
export default Component5902;
