import React from 'react';
const LABEL_13902 = 'component_13902';
export function Component13902({ value = 13902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13902, 'data-value': derived.doubled }, children);
}
export default Component13902;
