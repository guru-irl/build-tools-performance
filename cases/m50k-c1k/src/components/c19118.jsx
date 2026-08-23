import React from 'react';
const LABEL_19118 = 'component_19118';
export function Component19118({ value = 19118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19118, 'data-value': derived.doubled }, children);
}
export default Component19118;
