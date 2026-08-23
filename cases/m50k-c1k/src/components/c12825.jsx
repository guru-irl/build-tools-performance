import React from 'react';
const LABEL_12825 = 'component_12825';
export function Component12825({ value = 12825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12825, 'data-value': derived.doubled }, children);
}
export default Component12825;
