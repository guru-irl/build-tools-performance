import React from 'react';
const LABEL_35437 = 'component_35437';
export function Component35437({ value = 35437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35437, 'data-value': derived.doubled }, children);
}
export default Component35437;
