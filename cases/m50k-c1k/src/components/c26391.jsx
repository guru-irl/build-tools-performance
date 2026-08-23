import React from 'react';
const LABEL_26391 = 'component_26391';
export function Component26391({ value = 26391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26391, 'data-value': derived.doubled }, children);
}
export default Component26391;
