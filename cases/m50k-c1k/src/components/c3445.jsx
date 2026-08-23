import React from 'react';
const LABEL_3445 = 'component_3445';
export function Component3445({ value = 3445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3445, 'data-value': derived.doubled }, children);
}
export default Component3445;
