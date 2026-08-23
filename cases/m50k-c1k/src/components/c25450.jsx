import React from 'react';
const LABEL_25450 = 'component_25450';
export function Component25450({ value = 25450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25450, 'data-value': derived.doubled }, children);
}
export default Component25450;
