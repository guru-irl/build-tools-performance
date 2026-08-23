import React from 'react';
const LABEL_15905 = 'component_15905';
export function Component15905({ value = 15905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15905, 'data-value': derived.doubled }, children);
}
export default Component15905;
