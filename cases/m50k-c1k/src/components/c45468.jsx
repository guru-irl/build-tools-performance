import React from 'react';
const LABEL_45468 = 'component_45468';
export function Component45468({ value = 45468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45468, 'data-value': derived.doubled }, children);
}
export default Component45468;
