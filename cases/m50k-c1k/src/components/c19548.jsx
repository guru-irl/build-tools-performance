import React from 'react';
const LABEL_19548 = 'component_19548';
export function Component19548({ value = 19548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19548, 'data-value': derived.doubled }, children);
}
export default Component19548;
