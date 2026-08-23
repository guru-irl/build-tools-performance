import React from 'react';
const LABEL_28905 = 'component_28905';
export function Component28905({ value = 28905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28905, 'data-value': derived.doubled }, children);
}
export default Component28905;
