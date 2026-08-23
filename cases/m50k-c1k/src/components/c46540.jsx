import React from 'react';
const LABEL_46540 = 'component_46540';
export function Component46540({ value = 46540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46540, 'data-value': derived.doubled }, children);
}
export default Component46540;
