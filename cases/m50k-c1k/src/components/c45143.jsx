import React from 'react';
const LABEL_45143 = 'component_45143';
export function Component45143({ value = 45143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45143, 'data-value': derived.doubled }, children);
}
export default Component45143;
