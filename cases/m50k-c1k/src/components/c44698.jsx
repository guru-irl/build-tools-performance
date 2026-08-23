import React from 'react';
const LABEL_44698 = 'component_44698';
export function Component44698({ value = 44698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44698, 'data-value': derived.doubled }, children);
}
export default Component44698;
