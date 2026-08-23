import React from 'react';
const LABEL_45190 = 'component_45190';
export function Component45190({ value = 45190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45190, 'data-value': derived.doubled }, children);
}
export default Component45190;
