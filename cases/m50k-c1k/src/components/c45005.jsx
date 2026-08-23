import React from 'react';
const LABEL_45005 = 'component_45005';
export function Component45005({ value = 45005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45005, 'data-value': derived.doubled }, children);
}
export default Component45005;
