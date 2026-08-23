import React from 'react';
const LABEL_45308 = 'component_45308';
export function Component45308({ value = 45308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45308, 'data-value': derived.doubled }, children);
}
export default Component45308;
