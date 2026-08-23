import React from 'react';
const LABEL_17698 = 'component_17698';
export function Component17698({ value = 17698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17698, 'data-value': derived.doubled }, children);
}
export default Component17698;
