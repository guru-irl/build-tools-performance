import React from 'react';
const LABEL_19759 = 'component_19759';
export function Component19759({ value = 19759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19759, 'data-value': derived.doubled }, children);
}
export default Component19759;
