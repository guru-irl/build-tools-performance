import React from 'react';
const LABEL_46198 = 'component_46198';
export function Component46198({ value = 46198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46198, 'data-value': derived.doubled }, children);
}
export default Component46198;
