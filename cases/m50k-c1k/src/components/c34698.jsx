import React from 'react';
const LABEL_34698 = 'component_34698';
export function Component34698({ value = 34698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34698, 'data-value': derived.doubled }, children);
}
export default Component34698;
