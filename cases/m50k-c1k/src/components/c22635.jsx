import React from 'react';
const LABEL_22635 = 'component_22635';
export function Component22635({ value = 22635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22635, 'data-value': derived.doubled }, children);
}
export default Component22635;
