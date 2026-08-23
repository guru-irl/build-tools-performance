import React from 'react';
const LABEL_5905 = 'component_5905';
export function Component5905({ value = 5905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5905, 'data-value': derived.doubled }, children);
}
export default Component5905;
