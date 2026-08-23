import React from 'react';
const LABEL_35181 = 'component_35181';
export function Component35181({ value = 35181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35181, 'data-value': derived.doubled }, children);
}
export default Component35181;
