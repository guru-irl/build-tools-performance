import React from 'react';
const LABEL_7437 = 'component_7437';
export function Component7437({ value = 7437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7437, 'data-value': derived.doubled }, children);
}
export default Component7437;
