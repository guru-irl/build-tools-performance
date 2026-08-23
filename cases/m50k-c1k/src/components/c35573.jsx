import React from 'react';
const LABEL_35573 = 'component_35573';
export function Component35573({ value = 35573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35573, 'data-value': derived.doubled }, children);
}
export default Component35573;
