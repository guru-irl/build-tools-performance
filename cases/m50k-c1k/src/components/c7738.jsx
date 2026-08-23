import React from 'react';
const LABEL_7738 = 'component_7738';
export function Component7738({ value = 7738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7738, 'data-value': derived.doubled }, children);
}
export default Component7738;
