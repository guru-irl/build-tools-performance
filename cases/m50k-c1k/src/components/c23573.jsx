import React from 'react';
const LABEL_23573 = 'component_23573';
export function Component23573({ value = 23573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23573, 'data-value': derived.doubled }, children);
}
export default Component23573;
