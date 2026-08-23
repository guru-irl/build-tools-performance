import React from 'react';
const LABEL_19698 = 'component_19698';
export function Component19698({ value = 19698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19698, 'data-value': derived.doubled }, children);
}
export default Component19698;
