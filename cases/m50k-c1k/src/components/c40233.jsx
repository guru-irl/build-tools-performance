import React from 'react';
const LABEL_40233 = 'component_40233';
export function Component40233({ value = 40233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40233, 'data-value': derived.doubled }, children);
}
export default Component40233;
