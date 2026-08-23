import React from 'react';
const LABEL_36355 = 'component_36355';
export function Component36355({ value = 36355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36355, 'data-value': derived.doubled }, children);
}
export default Component36355;
