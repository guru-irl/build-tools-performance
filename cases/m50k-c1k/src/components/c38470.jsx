import React from 'react';
const LABEL_38470 = 'component_38470';
export function Component38470({ value = 38470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38470, 'data-value': derived.doubled }, children);
}
export default Component38470;
