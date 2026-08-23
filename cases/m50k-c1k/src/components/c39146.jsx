import React from 'react';
const LABEL_39146 = 'component_39146';
export function Component39146({ value = 39146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39146, 'data-value': derived.doubled }, children);
}
export default Component39146;
