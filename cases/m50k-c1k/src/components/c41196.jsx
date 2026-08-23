import React from 'react';
const LABEL_41196 = 'component_41196';
export function Component41196({ value = 41196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41196, 'data-value': derived.doubled }, children);
}
export default Component41196;
