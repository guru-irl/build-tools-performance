import React from 'react';
const LABEL_14573 = 'component_14573';
export function Component14573({ value = 14573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14573, 'data-value': derived.doubled }, children);
}
export default Component14573;
