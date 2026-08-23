import React from 'react';
const LABEL_34025 = 'component_34025';
export function Component34025({ value = 34025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34025, 'data-value': derived.doubled }, children);
}
export default Component34025;
