import React from 'react';
const LABEL_37196 = 'component_37196';
export function Component37196({ value = 37196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37196, 'data-value': derived.doubled }, children);
}
export default Component37196;
