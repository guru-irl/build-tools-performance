import React from 'react';
const LABEL_35690 = 'component_35690';
export function Component35690({ value = 35690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35690, 'data-value': derived.doubled }, children);
}
export default Component35690;
