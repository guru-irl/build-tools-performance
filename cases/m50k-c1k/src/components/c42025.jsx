import React from 'react';
const LABEL_42025 = 'component_42025';
export function Component42025({ value = 42025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42025, 'data-value': derived.doubled }, children);
}
export default Component42025;
