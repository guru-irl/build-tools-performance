import React from 'react';
const LABEL_38775 = 'component_38775';
export function Component38775({ value = 38775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38775, 'data-value': derived.doubled }, children);
}
export default Component38775;
