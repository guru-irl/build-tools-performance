import React from 'react';
const LABEL_11573 = 'component_11573';
export function Component11573({ value = 11573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11573, 'data-value': derived.doubled }, children);
}
export default Component11573;
