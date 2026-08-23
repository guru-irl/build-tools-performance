import React from 'react';
const LABEL_45425 = 'component_45425';
export function Component45425({ value = 45425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45425, 'data-value': derived.doubled }, children);
}
export default Component45425;
