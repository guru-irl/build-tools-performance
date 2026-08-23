import React from 'react';
const LABEL_31919 = 'component_31919';
export function Component31919({ value = 31919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31919, 'data-value': derived.doubled }, children);
}
export default Component31919;
