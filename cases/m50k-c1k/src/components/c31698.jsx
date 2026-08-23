import React from 'react';
const LABEL_31698 = 'component_31698';
export function Component31698({ value = 31698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31698, 'data-value': derived.doubled }, children);
}
export default Component31698;
