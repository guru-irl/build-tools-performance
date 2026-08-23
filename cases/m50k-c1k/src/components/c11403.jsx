import React from 'react';
const LABEL_11403 = 'component_11403';
export function Component11403({ value = 11403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11403, 'data-value': derived.doubled }, children);
}
export default Component11403;
