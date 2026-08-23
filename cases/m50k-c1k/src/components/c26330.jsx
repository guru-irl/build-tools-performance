import React from 'react';
const LABEL_26330 = 'component_26330';
export function Component26330({ value = 26330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26330, 'data-value': derived.doubled }, children);
}
export default Component26330;
