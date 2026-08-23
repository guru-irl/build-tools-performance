import React from 'react';
const LABEL_18698 = 'component_18698';
export function Component18698({ value = 18698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18698, 'data-value': derived.doubled }, children);
}
export default Component18698;
