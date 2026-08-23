import React from 'react';
const LABEL_8265 = 'component_8265';
export function Component8265({ value = 8265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8265, 'data-value': derived.doubled }, children);
}
export default Component8265;
