import React from 'react';
const LABEL_45467 = 'component_45467';
export function Component45467({ value = 45467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45467, 'data-value': derived.doubled }, children);
}
export default Component45467;
