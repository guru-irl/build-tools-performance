import React from 'react';
const LABEL_22926 = 'component_22926';
export function Component22926({ value = 22926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22926, 'data-value': derived.doubled }, children);
}
export default Component22926;
