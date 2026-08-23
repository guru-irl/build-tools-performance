import React from 'react';
const LABEL_25480 = 'component_25480';
export function Component25480({ value = 25480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25480, 'data-value': derived.doubled }, children);
}
export default Component25480;
