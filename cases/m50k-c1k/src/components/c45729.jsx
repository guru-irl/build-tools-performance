import React from 'react';
const LABEL_45729 = 'component_45729';
export function Component45729({ value = 45729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45729, 'data-value': derived.doubled }, children);
}
export default Component45729;
