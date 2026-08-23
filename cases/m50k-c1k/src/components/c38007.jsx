import React from 'react';
const LABEL_38007 = 'component_38007';
export function Component38007({ value = 38007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38007, 'data-value': derived.doubled }, children);
}
export default Component38007;
