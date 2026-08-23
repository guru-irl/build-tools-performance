import React from 'react';
const LABEL_38234 = 'component_38234';
export function Component38234({ value = 38234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38234, 'data-value': derived.doubled }, children);
}
export default Component38234;
