import React from 'react';
const LABEL_8330 = 'component_8330';
export function Component8330({ value = 8330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8330, 'data-value': derived.doubled }, children);
}
export default Component8330;
