import React from 'react';
const LABEL_21905 = 'component_21905';
export function Component21905({ value = 21905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21905, 'data-value': derived.doubled }, children);
}
export default Component21905;
