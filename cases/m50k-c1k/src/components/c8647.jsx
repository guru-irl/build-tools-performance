import React from 'react';
const LABEL_8647 = 'component_8647';
export function Component8647({ value = 8647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8647, 'data-value': derived.doubled }, children);
}
export default Component8647;
