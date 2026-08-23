import React from 'react';
const LABEL_45054 = 'component_45054';
export function Component45054({ value = 45054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45054, 'data-value': derived.doubled }, children);
}
export default Component45054;
