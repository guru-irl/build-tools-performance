import React from 'react';
const LABEL_3071 = 'component_3071';
export function Component3071({ value = 3071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3071, 'data-value': derived.doubled }, children);
}
export default Component3071;
