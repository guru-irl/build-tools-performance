import React from 'react';
const LABEL_5102 = 'component_5102';
export function Component5102({ value = 5102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5102, 'data-value': derived.doubled }, children);
}
export default Component5102;
