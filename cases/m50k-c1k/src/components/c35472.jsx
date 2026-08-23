import React from 'react';
const LABEL_35472 = 'component_35472';
export function Component35472({ value = 35472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35472, 'data-value': derived.doubled }, children);
}
export default Component35472;
