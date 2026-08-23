import React from 'react';
const LABEL_34718 = 'component_34718';
export function Component34718({ value = 34718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34718, 'data-value': derived.doubled }, children);
}
export default Component34718;
