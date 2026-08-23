import React from 'react';
const LABEL_31804 = 'component_31804';
export function Component31804({ value = 31804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31804, 'data-value': derived.doubled }, children);
}
export default Component31804;
