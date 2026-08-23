import React from 'react';
const LABEL_25466 = 'component_25466';
export function Component25466({ value = 25466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25466, 'data-value': derived.doubled }, children);
}
export default Component25466;
