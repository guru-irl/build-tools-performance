import React from 'react';
const LABEL_42125 = 'component_42125';
export function Component42125({ value = 42125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42125, 'data-value': derived.doubled }, children);
}
export default Component42125;
