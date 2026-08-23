import React from 'react';
const LABEL_16738 = 'component_16738';
export function Component16738({ value = 16738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16738, 'data-value': derived.doubled }, children);
}
export default Component16738;
