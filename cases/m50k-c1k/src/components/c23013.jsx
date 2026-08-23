import React from 'react';
const LABEL_23013 = 'component_23013';
export function Component23013({ value = 23013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23013, 'data-value': derived.doubled }, children);
}
export default Component23013;
