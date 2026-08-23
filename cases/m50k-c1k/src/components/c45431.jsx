import React from 'react';
const LABEL_45431 = 'component_45431';
export function Component45431({ value = 45431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45431, 'data-value': derived.doubled }, children);
}
export default Component45431;
