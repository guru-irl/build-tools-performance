import React from 'react';
const LABEL_11474 = 'component_11474';
export function Component11474({ value = 11474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11474, 'data-value': derived.doubled }, children);
}
export default Component11474;
