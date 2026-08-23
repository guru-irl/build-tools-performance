import React from 'react';
const LABEL_45857 = 'component_45857';
export function Component45857({ value = 45857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45857, 'data-value': derived.doubled }, children);
}
export default Component45857;
