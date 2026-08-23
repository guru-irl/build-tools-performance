import React from 'react';
const LABEL_26905 = 'component_26905';
export function Component26905({ value = 26905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26905, 'data-value': derived.doubled }, children);
}
export default Component26905;
