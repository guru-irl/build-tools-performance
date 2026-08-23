import React from 'react';
const LABEL_25093 = 'component_25093';
export function Component25093({ value = 25093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25093, 'data-value': derived.doubled }, children);
}
export default Component25093;
