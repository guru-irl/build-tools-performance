import React from 'react';
const LABEL_15573 = 'component_15573';
export function Component15573({ value = 15573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15573, 'data-value': derived.doubled }, children);
}
export default Component15573;
