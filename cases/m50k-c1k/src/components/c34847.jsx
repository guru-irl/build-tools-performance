import React from 'react';
const LABEL_34847 = 'component_34847';
export function Component34847({ value = 34847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34847, 'data-value': derived.doubled }, children);
}
export default Component34847;
