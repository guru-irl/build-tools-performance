import React from 'react';
const LABEL_19796 = 'component_19796';
export function Component19796({ value = 19796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19796, 'data-value': derived.doubled }, children);
}
export default Component19796;
