import React from 'react';
const LABEL_31025 = 'component_31025';
export function Component31025({ value = 31025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31025, 'data-value': derived.doubled }, children);
}
export default Component31025;
