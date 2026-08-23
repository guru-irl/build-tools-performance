import React from 'react';
const LABEL_11992 = 'component_11992';
export function Component11992({ value = 11992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11992, 'data-value': derived.doubled }, children);
}
export default Component11992;
