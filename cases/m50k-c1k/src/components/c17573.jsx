import React from 'react';
const LABEL_17573 = 'component_17573';
export function Component17573({ value = 17573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17573, 'data-value': derived.doubled }, children);
}
export default Component17573;
