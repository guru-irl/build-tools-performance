import React from 'react';
const LABEL_15698 = 'component_15698';
export function Component15698({ value = 15698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15698, 'data-value': derived.doubled }, children);
}
export default Component15698;
