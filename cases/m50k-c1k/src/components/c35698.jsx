import React from 'react';
const LABEL_35698 = 'component_35698';
export function Component35698({ value = 35698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35698, 'data-value': derived.doubled }, children);
}
export default Component35698;
