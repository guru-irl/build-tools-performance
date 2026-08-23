import React from 'react';
const LABEL_34 = 'component_34';
export function Component34({ value = 34, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34, 'data-value': derived.doubled }, children);
}
export default Component34;
