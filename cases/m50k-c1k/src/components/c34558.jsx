import React from 'react';
const LABEL_34558 = 'component_34558';
export function Component34558({ value = 34558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34558, 'data-value': derived.doubled }, children);
}
export default Component34558;
