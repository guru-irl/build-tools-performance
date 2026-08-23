import React from 'react';
const LABEL_38738 = 'component_38738';
export function Component38738({ value = 38738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38738, 'data-value': derived.doubled }, children);
}
export default Component38738;
