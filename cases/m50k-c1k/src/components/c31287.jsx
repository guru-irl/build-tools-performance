import React from 'react';
const LABEL_31287 = 'component_31287';
export function Component31287({ value = 31287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31287, 'data-value': derived.doubled }, children);
}
export default Component31287;
