import React from 'react';
const LABEL_5362 = 'component_5362';
export function Component5362({ value = 5362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5362, 'data-value': derived.doubled }, children);
}
export default Component5362;
