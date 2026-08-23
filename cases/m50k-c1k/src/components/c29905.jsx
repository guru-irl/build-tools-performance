import React from 'react';
const LABEL_29905 = 'component_29905';
export function Component29905({ value = 29905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29905, 'data-value': derived.doubled }, children);
}
export default Component29905;
