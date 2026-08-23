import React from 'react';
const LABEL_19018 = 'component_19018';
export function Component19018({ value = 19018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19018, 'data-value': derived.doubled }, children);
}
export default Component19018;
