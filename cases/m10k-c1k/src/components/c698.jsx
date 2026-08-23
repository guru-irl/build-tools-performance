import React from 'react';
const LABEL_698 = 'component_698';
export function Component698({ value = 698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_698, 'data-value': derived.doubled }, children);
}
export default Component698;
