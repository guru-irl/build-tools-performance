import React from 'react';
const LABEL_36472 = 'component_36472';
export function Component36472({ value = 36472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36472, 'data-value': derived.doubled }, children);
}
export default Component36472;
