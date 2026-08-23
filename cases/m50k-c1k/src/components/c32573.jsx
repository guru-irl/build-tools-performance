import React from 'react';
const LABEL_32573 = 'component_32573';
export function Component32573({ value = 32573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32573, 'data-value': derived.doubled }, children);
}
export default Component32573;
