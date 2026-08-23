import React from 'react';
const LABEL_1905 = 'component_1905';
export function Component1905({ value = 1905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1905, 'data-value': derived.doubled }, children);
}
export default Component1905;
