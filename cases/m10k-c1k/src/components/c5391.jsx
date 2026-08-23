import React from 'react';
const LABEL_5391 = 'component_5391';
export function Component5391({ value = 5391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5391, 'data-value': derived.doubled }, children);
}
export default Component5391;
