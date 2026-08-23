import React from 'react';
const LABEL_22698 = 'component_22698';
export function Component22698({ value = 22698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22698, 'data-value': derived.doubled }, children);
}
export default Component22698;
