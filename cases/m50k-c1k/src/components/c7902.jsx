import React from 'react';
const LABEL_7902 = 'component_7902';
export function Component7902({ value = 7902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7902, 'data-value': derived.doubled }, children);
}
export default Component7902;
