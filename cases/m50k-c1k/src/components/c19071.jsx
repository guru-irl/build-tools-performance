import React from 'react';
const LABEL_19071 = 'component_19071';
export function Component19071({ value = 19071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19071, 'data-value': derived.doubled }, children);
}
export default Component19071;
