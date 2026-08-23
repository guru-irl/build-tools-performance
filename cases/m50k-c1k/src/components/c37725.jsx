import React from 'react';
const LABEL_37725 = 'component_37725';
export function Component37725({ value = 37725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37725, 'data-value': derived.doubled }, children);
}
export default Component37725;
