import React from 'react';
const LABEL_45271 = 'component_45271';
export function Component45271({ value = 45271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45271, 'data-value': derived.doubled }, children);
}
export default Component45271;
