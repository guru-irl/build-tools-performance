import React from 'react';
const LABEL_28698 = 'component_28698';
export function Component28698({ value = 28698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28698, 'data-value': derived.doubled }, children);
}
export default Component28698;
