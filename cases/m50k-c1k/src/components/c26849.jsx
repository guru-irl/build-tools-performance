import React from 'react';
const LABEL_26849 = 'component_26849';
export function Component26849({ value = 26849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26849, 'data-value': derived.doubled }, children);
}
export default Component26849;
