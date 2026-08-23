import React from 'react';
const LABEL_38710 = 'component_38710';
export function Component38710({ value = 38710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38710, 'data-value': derived.doubled }, children);
}
export default Component38710;
