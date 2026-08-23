import React from 'react';
const LABEL_44696 = 'component_44696';
export function Component44696({ value = 44696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44696, 'data-value': derived.doubled }, children);
}
export default Component44696;
