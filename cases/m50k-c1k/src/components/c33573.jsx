import React from 'react';
const LABEL_33573 = 'component_33573';
export function Component33573({ value = 33573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33573, 'data-value': derived.doubled }, children);
}
export default Component33573;
