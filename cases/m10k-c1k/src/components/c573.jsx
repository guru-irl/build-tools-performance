import React from 'react';
const LABEL_573 = 'component_573';
export function Component573({ value = 573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_573, 'data-value': derived.doubled }, children);
}
export default Component573;
