import React from 'react';
const LABEL_11184 = 'component_11184';
export function Component11184({ value = 11184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11184, 'data-value': derived.doubled }, children);
}
export default Component11184;
