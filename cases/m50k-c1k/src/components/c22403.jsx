import React from 'react';
const LABEL_22403 = 'component_22403';
export function Component22403({ value = 22403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22403, 'data-value': derived.doubled }, children);
}
export default Component22403;
