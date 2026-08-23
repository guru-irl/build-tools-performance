import React from 'react';
const LABEL_29194 = 'component_29194';
export function Component29194({ value = 29194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29194, 'data-value': derived.doubled }, children);
}
export default Component29194;
