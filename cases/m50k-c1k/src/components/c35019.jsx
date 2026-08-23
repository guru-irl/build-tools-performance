import React from 'react';
const LABEL_35019 = 'component_35019';
export function Component35019({ value = 35019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35019, 'data-value': derived.doubled }, children);
}
export default Component35019;
