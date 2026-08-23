import React from 'react';
const LABEL_45372 = 'component_45372';
export function Component45372({ value = 45372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45372, 'data-value': derived.doubled }, children);
}
export default Component45372;
