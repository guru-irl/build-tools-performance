import React from 'react';
const LABEL_35738 = 'component_35738';
export function Component35738({ value = 35738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35738, 'data-value': derived.doubled }, children);
}
export default Component35738;
