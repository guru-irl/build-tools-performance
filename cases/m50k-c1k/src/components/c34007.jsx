import React from 'react';
const LABEL_34007 = 'component_34007';
export function Component34007({ value = 34007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34007, 'data-value': derived.doubled }, children);
}
export default Component34007;
