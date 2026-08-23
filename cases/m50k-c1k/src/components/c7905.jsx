import React from 'react';
const LABEL_7905 = 'component_7905';
export function Component7905({ value = 7905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7905, 'data-value': derived.doubled }, children);
}
export default Component7905;
