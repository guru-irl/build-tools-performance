import React from 'react';
const LABEL_22573 = 'component_22573';
export function Component22573({ value = 22573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22573, 'data-value': derived.doubled }, children);
}
export default Component22573;
