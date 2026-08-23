import React from 'react';
const LABEL_29025 = 'component_29025';
export function Component29025({ value = 29025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29025, 'data-value': derived.doubled }, children);
}
export default Component29025;
