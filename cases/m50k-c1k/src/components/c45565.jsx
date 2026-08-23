import React from 'react';
const LABEL_45565 = 'component_45565';
export function Component45565({ value = 45565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45565, 'data-value': derived.doubled }, children);
}
export default Component45565;
