import React from 'react';
const LABEL_8650 = 'component_8650';
export function Component8650({ value = 8650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8650, 'data-value': derived.doubled }, children);
}
export default Component8650;
