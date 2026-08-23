import React from 'react';
const LABEL_36287 = 'component_36287';
export function Component36287({ value = 36287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36287, 'data-value': derived.doubled }, children);
}
export default Component36287;
