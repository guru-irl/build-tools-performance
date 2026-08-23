import React from 'react';
const LABEL_25183 = 'component_25183';
export function Component25183({ value = 25183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25183, 'data-value': derived.doubled }, children);
}
export default Component25183;
