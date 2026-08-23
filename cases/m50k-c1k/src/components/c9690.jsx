import React from 'react';
const LABEL_9690 = 'component_9690';
export function Component9690({ value = 9690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9690, 'data-value': derived.doubled }, children);
}
export default Component9690;
