import React from 'react';
const LABEL_45541 = 'component_45541';
export function Component45541({ value = 45541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45541, 'data-value': derived.doubled }, children);
}
export default Component45541;
