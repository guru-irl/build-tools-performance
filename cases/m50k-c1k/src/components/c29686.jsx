import React from 'react';
const LABEL_29686 = 'component_29686';
export function Component29686({ value = 29686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29686, 'data-value': derived.doubled }, children);
}
export default Component29686;
