import React from 'react';
const LABEL_171 = 'component_171';
export function Component171({ value = 171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_171, 'data-value': derived.doubled }, children);
}
export default Component171;
