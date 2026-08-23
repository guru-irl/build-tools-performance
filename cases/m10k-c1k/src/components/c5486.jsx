import React from 'react';
const LABEL_5486 = 'component_5486';
export function Component5486({ value = 5486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5486, 'data-value': derived.doubled }, children);
}
export default Component5486;
