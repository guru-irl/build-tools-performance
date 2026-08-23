import React from 'react';
const LABEL_24759 = 'component_24759';
export function Component24759({ value = 24759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24759, 'data-value': derived.doubled }, children);
}
export default Component24759;
