import React from 'react';
const LABEL_32025 = 'component_32025';
export function Component32025({ value = 32025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32025, 'data-value': derived.doubled }, children);
}
export default Component32025;
