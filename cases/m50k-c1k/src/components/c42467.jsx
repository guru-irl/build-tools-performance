import React from 'react';
const LABEL_42467 = 'component_42467';
export function Component42467({ value = 42467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42467, 'data-value': derived.doubled }, children);
}
export default Component42467;
