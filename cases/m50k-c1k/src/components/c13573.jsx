import React from 'react';
const LABEL_13573 = 'component_13573';
export function Component13573({ value = 13573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13573, 'data-value': derived.doubled }, children);
}
export default Component13573;
