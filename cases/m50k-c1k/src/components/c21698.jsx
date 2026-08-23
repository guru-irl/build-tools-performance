import React from 'react';
const LABEL_21698 = 'component_21698';
export function Component21698({ value = 21698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21698, 'data-value': derived.doubled }, children);
}
export default Component21698;
