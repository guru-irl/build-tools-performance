import React from 'react';
const LABEL_7698 = 'component_7698';
export function Component7698({ value = 7698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7698, 'data-value': derived.doubled }, children);
}
export default Component7698;
