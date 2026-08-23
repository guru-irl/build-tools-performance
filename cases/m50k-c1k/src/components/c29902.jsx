import React from 'react';
const LABEL_29902 = 'component_29902';
export function Component29902({ value = 29902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29902, 'data-value': derived.doubled }, children);
}
export default Component29902;
