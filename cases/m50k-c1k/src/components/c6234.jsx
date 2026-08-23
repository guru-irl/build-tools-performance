import React from 'react';
const LABEL_6234 = 'component_6234';
export function Component6234({ value = 6234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6234, 'data-value': derived.doubled }, children);
}
export default Component6234;
