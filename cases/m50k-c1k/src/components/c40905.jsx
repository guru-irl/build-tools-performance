import React from 'react';
const LABEL_40905 = 'component_40905';
export function Component40905({ value = 40905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40905, 'data-value': derived.doubled }, children);
}
export default Component40905;
