import React from 'react';
const LABEL_35184 = 'component_35184';
export function Component35184({ value = 35184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35184, 'data-value': derived.doubled }, children);
}
export default Component35184;
