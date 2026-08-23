import React from 'react';
const LABEL_46568 = 'component_46568';
export function Component46568({ value = 46568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46568, 'data-value': derived.doubled }, children);
}
export default Component46568;
