import React from 'react';
const LABEL_38677 = 'component_38677';
export function Component38677({ value = 38677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38677, 'data-value': derived.doubled }, children);
}
export default Component38677;
