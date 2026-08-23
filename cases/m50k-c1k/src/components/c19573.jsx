import React from 'react';
const LABEL_19573 = 'component_19573';
export function Component19573({ value = 19573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19573, 'data-value': derived.doubled }, children);
}
export default Component19573;
