import React from 'react';
const LABEL_37926 = 'component_37926';
export function Component37926({ value = 37926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37926, 'data-value': derived.doubled }, children);
}
export default Component37926;
