import React from 'react';
const LABEL_22905 = 'component_22905';
export function Component22905({ value = 22905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22905, 'data-value': derived.doubled }, children);
}
export default Component22905;
