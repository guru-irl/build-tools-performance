import React from 'react';
const LABEL_25738 = 'component_25738';
export function Component25738({ value = 25738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25738, 'data-value': derived.doubled }, children);
}
export default Component25738;
