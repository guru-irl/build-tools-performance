import React from 'react';
const LABEL_25698 = 'component_25698';
export function Component25698({ value = 25698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25698, 'data-value': derived.doubled }, children);
}
export default Component25698;
