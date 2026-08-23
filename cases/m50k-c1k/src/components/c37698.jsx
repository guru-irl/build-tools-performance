import React from 'react';
const LABEL_37698 = 'component_37698';
export function Component37698({ value = 37698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37698, 'data-value': derived.doubled }, children);
}
export default Component37698;
