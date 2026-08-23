import React from 'react';
const LABEL_45644 = 'component_45644';
export function Component45644({ value = 45644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45644, 'data-value': derived.doubled }, children);
}
export default Component45644;
