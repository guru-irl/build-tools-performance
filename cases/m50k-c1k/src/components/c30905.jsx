import React from 'react';
const LABEL_30905 = 'component_30905';
export function Component30905({ value = 30905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30905, 'data-value': derived.doubled }, children);
}
export default Component30905;
