import React from 'react';
const LABEL_13450 = 'component_13450';
export function Component13450({ value = 13450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13450, 'data-value': derived.doubled }, children);
}
export default Component13450;
