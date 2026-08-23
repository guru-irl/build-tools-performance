import React from 'react';
const LABEL_19073 = 'component_19073';
export function Component19073({ value = 19073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19073, 'data-value': derived.doubled }, children);
}
export default Component19073;
