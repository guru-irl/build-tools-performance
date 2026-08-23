import React from 'react';
const LABEL_13401 = 'component_13401';
export function Component13401({ value = 13401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13401, 'data-value': derived.doubled }, children);
}
export default Component13401;
