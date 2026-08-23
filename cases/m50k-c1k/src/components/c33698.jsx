import React from 'react';
const LABEL_33698 = 'component_33698';
export function Component33698({ value = 33698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33698, 'data-value': derived.doubled }, children);
}
export default Component33698;
