import React from 'react';
const LABEL_3698 = 'component_3698';
export function Component3698({ value = 3698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3698, 'data-value': derived.doubled }, children);
}
export default Component3698;
