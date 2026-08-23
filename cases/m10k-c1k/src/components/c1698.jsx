import React from 'react';
const LABEL_1698 = 'component_1698';
export function Component1698({ value = 1698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1698, 'data-value': derived.doubled }, children);
}
export default Component1698;
