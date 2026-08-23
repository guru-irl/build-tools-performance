import React from 'react';
const LABEL_5698 = 'component_5698';
export function Component5698({ value = 5698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5698, 'data-value': derived.doubled }, children);
}
export default Component5698;
