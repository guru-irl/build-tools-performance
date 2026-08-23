import React from 'react';
const LABEL_26573 = 'component_26573';
export function Component26573({ value = 26573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26573, 'data-value': derived.doubled }, children);
}
export default Component26573;
