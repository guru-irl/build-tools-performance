import React from 'react';
const LABEL_13071 = 'component_13071';
export function Component13071({ value = 13071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13071, 'data-value': derived.doubled }, children);
}
export default Component13071;
