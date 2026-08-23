import React from 'react';
const LABEL_40698 = 'component_40698';
export function Component40698({ value = 40698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40698, 'data-value': derived.doubled }, children);
}
export default Component40698;
