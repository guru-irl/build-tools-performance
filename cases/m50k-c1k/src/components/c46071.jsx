import React from 'react';
const LABEL_46071 = 'component_46071';
export function Component46071({ value = 46071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46071, 'data-value': derived.doubled }, children);
}
export default Component46071;
