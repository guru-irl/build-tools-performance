import React from 'react';
const LABEL_916 = 'component_916';
export function Component916({ value = 916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_916, 'data-value': derived.doubled }, children);
}
export default Component916;
