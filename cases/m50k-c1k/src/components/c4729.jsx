import React from 'react';
const LABEL_4729 = 'component_4729';
export function Component4729({ value = 4729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4729, 'data-value': derived.doubled }, children);
}
export default Component4729;
