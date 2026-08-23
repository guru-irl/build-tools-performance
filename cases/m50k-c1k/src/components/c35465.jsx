import React from 'react';
const LABEL_35465 = 'component_35465';
export function Component35465({ value = 35465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35465, 'data-value': derived.doubled }, children);
}
export default Component35465;
