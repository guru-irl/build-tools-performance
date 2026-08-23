import React from 'react';
const LABEL_46467 = 'component_46467';
export function Component46467({ value = 46467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46467, 'data-value': derived.doubled }, children);
}
export default Component46467;
