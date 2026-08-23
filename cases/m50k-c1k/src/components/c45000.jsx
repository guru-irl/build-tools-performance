import React from 'react';
const LABEL_45000 = 'component_45000';
export function Component45000({ value = 45000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45000, 'data-value': derived.doubled }, children);
}
export default Component45000;
