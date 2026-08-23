import React from 'react';
const LABEL_42116 = 'component_42116';
export function Component42116({ value = 42116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42116, 'data-value': derived.doubled }, children);
}
export default Component42116;
