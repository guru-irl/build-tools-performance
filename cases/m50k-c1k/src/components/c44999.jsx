import React from 'react';
const LABEL_44999 = 'component_44999';
export function Component44999({ value = 44999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44999, 'data-value': derived.doubled }, children);
}
export default Component44999;
