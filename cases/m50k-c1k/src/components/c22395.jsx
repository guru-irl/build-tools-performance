import React from 'react';
const LABEL_22395 = 'component_22395';
export function Component22395({ value = 22395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22395, 'data-value': derived.doubled }, children);
}
export default Component22395;
