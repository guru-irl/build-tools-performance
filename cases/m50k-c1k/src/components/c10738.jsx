import React from 'react';
const LABEL_10738 = 'component_10738';
export function Component10738({ value = 10738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10738, 'data-value': derived.doubled }, children);
}
export default Component10738;
