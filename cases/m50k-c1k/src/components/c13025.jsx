import React from 'react';
const LABEL_13025 = 'component_13025';
export function Component13025({ value = 13025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13025, 'data-value': derived.doubled }, children);
}
export default Component13025;
