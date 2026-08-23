import React from 'react';
const LABEL_16905 = 'component_16905';
export function Component16905({ value = 16905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16905, 'data-value': derived.doubled }, children);
}
export default Component16905;
