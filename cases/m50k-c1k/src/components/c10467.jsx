import React from 'react';
const LABEL_10467 = 'component_10467';
export function Component10467({ value = 10467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10467, 'data-value': derived.doubled }, children);
}
export default Component10467;
