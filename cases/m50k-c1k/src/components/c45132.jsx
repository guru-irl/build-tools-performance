import React from 'react';
const LABEL_45132 = 'component_45132';
export function Component45132({ value = 45132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45132, 'data-value': derived.doubled }, children);
}
export default Component45132;
