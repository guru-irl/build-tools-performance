import React from 'react';
const LABEL_2527 = 'component_2527';
export function Component2527({ value = 2527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2527, 'data-value': derived.doubled }, children);
}
export default Component2527;
