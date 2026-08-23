import React from 'react';
const LABEL_34499 = 'component_34499';
export function Component34499({ value = 34499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34499, 'data-value': derived.doubled }, children);
}
export default Component34499;
