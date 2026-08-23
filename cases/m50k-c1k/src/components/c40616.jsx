import React from 'react';
const LABEL_40616 = 'component_40616';
export function Component40616({ value = 40616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40616, 'data-value': derived.doubled }, children);
}
export default Component40616;
