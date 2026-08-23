import React from 'react';
const LABEL_19761 = 'component_19761';
export function Component19761({ value = 19761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19761, 'data-value': derived.doubled }, children);
}
export default Component19761;
