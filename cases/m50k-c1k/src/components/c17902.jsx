import React from 'react';
const LABEL_17902 = 'component_17902';
export function Component17902({ value = 17902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17902, 'data-value': derived.doubled }, children);
}
export default Component17902;
