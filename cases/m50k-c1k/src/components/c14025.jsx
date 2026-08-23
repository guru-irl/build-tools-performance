import React from 'react';
const LABEL_14025 = 'component_14025';
export function Component14025({ value = 14025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14025, 'data-value': derived.doubled }, children);
}
export default Component14025;
