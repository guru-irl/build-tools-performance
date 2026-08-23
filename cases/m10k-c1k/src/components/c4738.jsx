import React from 'react';
const LABEL_4738 = 'component_4738';
export function Component4738({ value = 4738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4738, 'data-value': derived.doubled }, children);
}
export default Component4738;
