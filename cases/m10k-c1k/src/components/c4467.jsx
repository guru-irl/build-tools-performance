import React from 'react';
const LABEL_4467 = 'component_4467';
export function Component4467({ value = 4467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4467, 'data-value': derived.doubled }, children);
}
export default Component4467;
