import React from 'react';
const LABEL_20467 = 'component_20467';
export function Component20467({ value = 20467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20467, 'data-value': derived.doubled }, children);
}
export default Component20467;
