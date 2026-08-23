import React from 'react';
const LABEL_902 = 'component_902';
export function Component902({ value = 902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_902, 'data-value': derived.doubled }, children);
}
export default Component902;
