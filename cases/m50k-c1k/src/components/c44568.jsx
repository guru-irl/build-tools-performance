import React from 'react';
const LABEL_44568 = 'component_44568';
export function Component44568({ value = 44568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44568, 'data-value': derived.doubled }, children);
}
export default Component44568;
