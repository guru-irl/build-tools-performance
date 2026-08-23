import React from 'react';
const LABEL_36025 = 'component_36025';
export function Component36025({ value = 36025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36025, 'data-value': derived.doubled }, children);
}
export default Component36025;
