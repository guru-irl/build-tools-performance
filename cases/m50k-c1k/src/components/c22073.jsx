import React from 'react';
const LABEL_22073 = 'component_22073';
export function Component22073({ value = 22073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22073, 'data-value': derived.doubled }, children);
}
export default Component22073;
