import React from 'react';
const LABEL_21013 = 'component_21013';
export function Component21013({ value = 21013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21013, 'data-value': derived.doubled }, children);
}
export default Component21013;
