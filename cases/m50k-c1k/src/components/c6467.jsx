import React from 'react';
const LABEL_6467 = 'component_6467';
export function Component6467({ value = 6467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6467, 'data-value': derived.doubled }, children);
}
export default Component6467;
