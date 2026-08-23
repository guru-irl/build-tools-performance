import React from 'react';
const LABEL_9467 = 'component_9467';
export function Component9467({ value = 9467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9467, 'data-value': derived.doubled }, children);
}
export default Component9467;
