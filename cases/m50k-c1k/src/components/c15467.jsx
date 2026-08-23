import React from 'react';
const LABEL_15467 = 'component_15467';
export function Component15467({ value = 15467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15467, 'data-value': derived.doubled }, children);
}
export default Component15467;
