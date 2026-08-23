import React from 'react';
const LABEL_45623 = 'component_45623';
export function Component45623({ value = 45623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45623, 'data-value': derived.doubled }, children);
}
export default Component45623;
