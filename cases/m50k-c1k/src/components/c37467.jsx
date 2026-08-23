import React from 'react';
const LABEL_37467 = 'component_37467';
export function Component37467({ value = 37467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37467, 'data-value': derived.doubled }, children);
}
export default Component37467;
