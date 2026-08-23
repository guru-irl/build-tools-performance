import React from 'react';
const LABEL_45842 = 'component_45842';
export function Component45842({ value = 45842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45842, 'data-value': derived.doubled }, children);
}
export default Component45842;
