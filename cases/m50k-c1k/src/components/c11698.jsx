import React from 'react';
const LABEL_11698 = 'component_11698';
export function Component11698({ value = 11698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11698, 'data-value': derived.doubled }, children);
}
export default Component11698;
