import React from 'react';
const LABEL_25017 = 'component_25017';
export function Component25017({ value = 25017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25017, 'data-value': derived.doubled }, children);
}
export default Component25017;
