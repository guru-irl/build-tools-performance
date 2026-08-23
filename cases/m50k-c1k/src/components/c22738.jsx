import React from 'react';
const LABEL_22738 = 'component_22738';
export function Component22738({ value = 22738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22738, 'data-value': derived.doubled }, children);
}
export default Component22738;
