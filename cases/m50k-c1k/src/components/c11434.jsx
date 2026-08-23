import React from 'react';
const LABEL_11434 = 'component_11434';
export function Component11434({ value = 11434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11434, 'data-value': derived.doubled }, children);
}
export default Component11434;
