import React from 'react';
const LABEL_29984 = 'component_29984';
export function Component29984({ value = 29984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29984, 'data-value': derived.doubled }, children);
}
export default Component29984;
