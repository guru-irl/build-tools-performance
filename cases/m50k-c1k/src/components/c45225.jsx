import React from 'react';
const LABEL_45225 = 'component_45225';
export function Component45225({ value = 45225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45225, 'data-value': derived.doubled }, children);
}
export default Component45225;
