import React from 'react';
const LABEL_36698 = 'component_36698';
export function Component36698({ value = 36698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36698, 'data-value': derived.doubled }, children);
}
export default Component36698;
