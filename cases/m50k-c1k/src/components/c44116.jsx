import React from 'react';
const LABEL_44116 = 'component_44116';
export function Component44116({ value = 44116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44116, 'data-value': derived.doubled }, children);
}
export default Component44116;
