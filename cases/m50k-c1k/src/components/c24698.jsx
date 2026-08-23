import React from 'react';
const LABEL_24698 = 'component_24698';
export function Component24698({ value = 24698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24698, 'data-value': derived.doubled }, children);
}
export default Component24698;
