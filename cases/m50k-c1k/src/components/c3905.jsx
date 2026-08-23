import React from 'react';
const LABEL_3905 = 'component_3905';
export function Component3905({ value = 3905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3905, 'data-value': derived.doubled }, children);
}
export default Component3905;
