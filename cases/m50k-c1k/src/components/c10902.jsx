import React from 'react';
const LABEL_10902 = 'component_10902';
export function Component10902({ value = 10902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10902, 'data-value': derived.doubled }, children);
}
export default Component10902;
