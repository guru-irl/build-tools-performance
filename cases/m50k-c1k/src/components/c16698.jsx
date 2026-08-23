import React from 'react';
const LABEL_16698 = 'component_16698';
export function Component16698({ value = 16698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16698, 'data-value': derived.doubled }, children);
}
export default Component16698;
