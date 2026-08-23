import React from 'react';
const LABEL_6573 = 'component_6573';
export function Component6573({ value = 6573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6573, 'data-value': derived.doubled }, children);
}
export default Component6573;
