import React from 'react';
const LABEL_41776 = 'component_41776';
export function Component41776({ value = 41776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41776, 'data-value': derived.doubled }, children);
}
export default Component41776;
