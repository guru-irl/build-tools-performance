import React from 'react';
const LABEL_11711 = 'component_11711';
export function Component11711({ value = 11711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11711, 'data-value': derived.doubled }, children);
}
export default Component11711;
