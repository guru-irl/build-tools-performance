import React from 'react';
const LABEL_6734 = 'component_6734';
export function Component6734({ value = 6734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6734, 'data-value': derived.doubled }, children);
}
export default Component6734;
