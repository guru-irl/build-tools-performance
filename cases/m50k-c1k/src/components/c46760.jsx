import React from 'react';
const LABEL_46760 = 'component_46760';
export function Component46760({ value = 46760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46760, 'data-value': derived.doubled }, children);
}
export default Component46760;
