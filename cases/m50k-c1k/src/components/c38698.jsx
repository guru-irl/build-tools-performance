import React from 'react';
const LABEL_38698 = 'component_38698';
export function Component38698({ value = 38698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38698, 'data-value': derived.doubled }, children);
}
export default Component38698;
