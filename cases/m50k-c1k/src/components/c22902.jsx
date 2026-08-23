import React from 'react';
const LABEL_22902 = 'component_22902';
export function Component22902({ value = 22902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22902, 'data-value': derived.doubled }, children);
}
export default Component22902;
