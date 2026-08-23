import React from 'react';
const LABEL_25071 = 'component_25071';
export function Component25071({ value = 25071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25071, 'data-value': derived.doubled }, children);
}
export default Component25071;
