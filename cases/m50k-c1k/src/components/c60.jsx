import React from 'react';
const LABEL_60 = 'component_60';
export function Component60({ value = 60, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_60, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_60, 'data-value': derived.doubled }, children);
}
export default Component60;
