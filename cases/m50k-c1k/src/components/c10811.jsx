import React from 'react';
const LABEL_10811 = 'component_10811';
export function Component10811({ value = 10811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10811, 'data-value': derived.doubled }, children);
}
export default Component10811;
