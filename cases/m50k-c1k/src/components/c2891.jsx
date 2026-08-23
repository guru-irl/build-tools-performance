import React from 'react';
const LABEL_2891 = 'component_2891';
export function Component2891({ value = 2891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2891, 'data-value': derived.doubled }, children);
}
export default Component2891;
