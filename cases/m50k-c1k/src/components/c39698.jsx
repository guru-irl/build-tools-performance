import React from 'react';
const LABEL_39698 = 'component_39698';
export function Component39698({ value = 39698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39698, 'data-value': derived.doubled }, children);
}
export default Component39698;
