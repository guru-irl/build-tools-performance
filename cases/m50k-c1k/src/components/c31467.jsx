import React from 'react';
const LABEL_31467 = 'component_31467';
export function Component31467({ value = 31467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31467, 'data-value': derived.doubled }, children);
}
export default Component31467;
