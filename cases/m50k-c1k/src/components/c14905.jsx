import React from 'react';
const LABEL_14905 = 'component_14905';
export function Component14905({ value = 14905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14905, 'data-value': derived.doubled }, children);
}
export default Component14905;
