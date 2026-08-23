import React from 'react';
const LABEL_31704 = 'component_31704';
export function Component31704({ value = 31704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31704, 'data-value': derived.doubled }, children);
}
export default Component31704;
