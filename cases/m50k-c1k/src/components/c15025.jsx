import React from 'react';
const LABEL_15025 = 'component_15025';
export function Component15025({ value = 15025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15025, 'data-value': derived.doubled }, children);
}
export default Component15025;
