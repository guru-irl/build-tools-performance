import React from 'react';
const LABEL_10071 = 'component_10071';
export function Component10071({ value = 10071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10071, 'data-value': derived.doubled }, children);
}
export default Component10071;
