import React from 'react';
const LABEL_10698 = 'component_10698';
export function Component10698({ value = 10698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10698, 'data-value': derived.doubled }, children);
}
export default Component10698;
