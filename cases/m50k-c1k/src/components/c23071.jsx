import React from 'react';
const LABEL_23071 = 'component_23071';
export function Component23071({ value = 23071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23071, 'data-value': derived.doubled }, children);
}
export default Component23071;
