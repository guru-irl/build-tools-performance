import React from 'react';
const LABEL_36009 = 'component_36009';
export function Component36009({ value = 36009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36009, 'data-value': derived.doubled }, children);
}
export default Component36009;
