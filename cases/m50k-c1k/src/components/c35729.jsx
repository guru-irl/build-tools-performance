import React from 'react';
const LABEL_35729 = 'component_35729';
export function Component35729({ value = 35729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35729, 'data-value': derived.doubled }, children);
}
export default Component35729;
