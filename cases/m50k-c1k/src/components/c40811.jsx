import React from 'react';
const LABEL_40811 = 'component_40811';
export function Component40811({ value = 40811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40811, 'data-value': derived.doubled }, children);
}
export default Component40811;
