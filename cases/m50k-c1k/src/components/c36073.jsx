import React from 'react';
const LABEL_36073 = 'component_36073';
export function Component36073({ value = 36073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36073, 'data-value': derived.doubled }, children);
}
export default Component36073;
