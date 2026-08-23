import React from 'react';
const LABEL_36738 = 'component_36738';
export function Component36738({ value = 36738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36738, 'data-value': derived.doubled }, children);
}
export default Component36738;
