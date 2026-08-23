import React from 'react';
const LABEL_3025 = 'component_3025';
export function Component3025({ value = 3025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3025, 'data-value': derived.doubled }, children);
}
export default Component3025;
