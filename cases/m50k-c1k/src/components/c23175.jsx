import React from 'react';
const LABEL_23175 = 'component_23175';
export function Component23175({ value = 23175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23175, 'data-value': derived.doubled }, children);
}
export default Component23175;
