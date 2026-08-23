import React from 'react';
const LABEL_23586 = 'component_23586';
export function Component23586({ value = 23586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23586, 'data-value': derived.doubled }, children);
}
export default Component23586;
