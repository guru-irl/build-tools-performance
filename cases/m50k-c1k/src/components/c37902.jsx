import React from 'react';
const LABEL_37902 = 'component_37902';
export function Component37902({ value = 37902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37902, 'data-value': derived.doubled }, children);
}
export default Component37902;
