import React from 'react';
const LABEL_26025 = 'component_26025';
export function Component26025({ value = 26025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26025, 'data-value': derived.doubled }, children);
}
export default Component26025;
