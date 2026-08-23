import React from 'react';
const LABEL_31300 = 'component_31300';
export function Component31300({ value = 31300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31300, 'data-value': derived.doubled }, children);
}
export default Component31300;
