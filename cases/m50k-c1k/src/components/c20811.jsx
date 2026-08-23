import React from 'react';
const LABEL_20811 = 'component_20811';
export function Component20811({ value = 20811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20811, 'data-value': derived.doubled }, children);
}
export default Component20811;
