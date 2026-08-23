import React from 'react';
const LABEL_14131 = 'component_14131';
export function Component14131({ value = 14131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14131, 'data-value': derived.doubled }, children);
}
export default Component14131;
