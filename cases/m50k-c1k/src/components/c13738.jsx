import React from 'react';
const LABEL_13738 = 'component_13738';
export function Component13738({ value = 13738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13738, 'data-value': derived.doubled }, children);
}
export default Component13738;
