import React from 'react';
const LABEL_4698 = 'component_4698';
export function Component4698({ value = 4698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4698, 'data-value': derived.doubled }, children);
}
export default Component4698;
