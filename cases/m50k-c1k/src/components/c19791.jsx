import React from 'react';
const LABEL_19791 = 'component_19791';
export function Component19791({ value = 19791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19791, 'data-value': derived.doubled }, children);
}
export default Component19791;
