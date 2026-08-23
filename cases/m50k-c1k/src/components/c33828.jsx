import React from 'react';
const LABEL_33828 = 'component_33828';
export function Component33828({ value = 33828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33828, 'data-value': derived.doubled }, children);
}
export default Component33828;
