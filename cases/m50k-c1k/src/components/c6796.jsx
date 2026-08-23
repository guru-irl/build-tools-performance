import React from 'react';
const LABEL_6796 = 'component_6796';
export function Component6796({ value = 6796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6796, 'data-value': derived.doubled }, children);
}
export default Component6796;
