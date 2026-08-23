import React from 'react';
const LABEL_8811 = 'component_8811';
export function Component8811({ value = 8811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8811, 'data-value': derived.doubled }, children);
}
export default Component8811;
