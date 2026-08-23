import React from 'react';
const LABEL_10601 = 'component_10601';
export function Component10601({ value = 10601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10601, 'data-value': derived.doubled }, children);
}
export default Component10601;
