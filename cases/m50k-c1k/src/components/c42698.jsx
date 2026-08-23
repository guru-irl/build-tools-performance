import React from 'react';
const LABEL_42698 = 'component_42698';
export function Component42698({ value = 42698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42698, 'data-value': derived.doubled }, children);
}
export default Component42698;
