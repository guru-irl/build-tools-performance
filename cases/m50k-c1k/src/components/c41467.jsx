import React from 'react';
const LABEL_41467 = 'component_41467';
export function Component41467({ value = 41467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41467, 'data-value': derived.doubled }, children);
}
export default Component41467;
