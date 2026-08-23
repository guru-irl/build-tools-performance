import React from 'react';
const LABEL_10472 = 'component_10472';
export function Component10472({ value = 10472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10472, 'data-value': derived.doubled }, children);
}
export default Component10472;
