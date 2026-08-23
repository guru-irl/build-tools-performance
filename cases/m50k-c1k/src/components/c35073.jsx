import React from 'react';
const LABEL_35073 = 'component_35073';
export function Component35073({ value = 35073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35073, 'data-value': derived.doubled }, children);
}
export default Component35073;
