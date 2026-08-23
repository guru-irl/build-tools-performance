import React from 'react';
const LABEL_36573 = 'component_36573';
export function Component36573({ value = 36573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36573, 'data-value': derived.doubled }, children);
}
export default Component36573;
