import React from 'react';
const LABEL_22842 = 'component_22842';
export function Component22842({ value = 22842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22842, 'data-value': derived.doubled }, children);
}
export default Component22842;
