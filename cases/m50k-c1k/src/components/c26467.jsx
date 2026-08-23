import React from 'react';
const LABEL_26467 = 'component_26467';
export function Component26467({ value = 26467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26467, 'data-value': derived.doubled }, children);
}
export default Component26467;
