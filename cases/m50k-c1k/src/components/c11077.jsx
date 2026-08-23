import React from 'react';
const LABEL_11077 = 'component_11077';
export function Component11077({ value = 11077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11077, 'data-value': derived.doubled }, children);
}
export default Component11077;
