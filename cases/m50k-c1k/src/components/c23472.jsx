import React from 'react';
const LABEL_23472 = 'component_23472';
export function Component23472({ value = 23472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23472, 'data-value': derived.doubled }, children);
}
export default Component23472;
