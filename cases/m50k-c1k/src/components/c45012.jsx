import React from 'react';
const LABEL_45012 = 'component_45012';
export function Component45012({ value = 45012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45012, 'data-value': derived.doubled }, children);
}
export default Component45012;
