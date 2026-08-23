import React from 'react';
const LABEL_8262 = 'component_8262';
export function Component8262({ value = 8262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8262, 'data-value': derived.doubled }, children);
}
export default Component8262;
