import React from 'react';
const LABEL_40491 = 'component_40491';
export function Component40491({ value = 40491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40491, 'data-value': derived.doubled }, children);
}
export default Component40491;
