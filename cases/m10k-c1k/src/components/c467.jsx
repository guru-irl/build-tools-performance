import React from 'react';
const LABEL_467 = 'component_467';
export function Component467({ value = 467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_467, 'data-value': derived.doubled }, children);
}
export default Component467;
