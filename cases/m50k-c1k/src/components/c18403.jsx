import React from 'react';
const LABEL_18403 = 'component_18403';
export function Component18403({ value = 18403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18403, 'data-value': derived.doubled }, children);
}
export default Component18403;
