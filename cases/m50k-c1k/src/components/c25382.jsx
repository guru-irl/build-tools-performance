import React from 'react';
const LABEL_25382 = 'component_25382';
export function Component25382({ value = 25382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25382, 'data-value': derived.doubled }, children);
}
export default Component25382;
