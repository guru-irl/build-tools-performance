import React from 'react';
const LABEL_20250 = 'component_20250';
export function Component20250({ value = 20250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20250, 'data-value': derived.doubled }, children);
}
export default Component20250;
