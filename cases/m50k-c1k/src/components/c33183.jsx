import React from 'react';
const LABEL_33183 = 'component_33183';
export function Component33183({ value = 33183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33183, 'data-value': derived.doubled }, children);
}
export default Component33183;
