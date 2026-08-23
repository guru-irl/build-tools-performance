import React from 'react';
const LABEL_22730 = 'component_22730';
export function Component22730({ value = 22730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22730, 'data-value': derived.doubled }, children);
}
export default Component22730;
