import React from 'react';
const LABEL_24573 = 'component_24573';
export function Component24573({ value = 24573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24573, 'data-value': derived.doubled }, children);
}
export default Component24573;
