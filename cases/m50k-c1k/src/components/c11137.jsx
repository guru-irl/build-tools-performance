import React from 'react';
const LABEL_11137 = 'component_11137';
export function Component11137({ value = 11137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11137, 'data-value': derived.doubled }, children);
}
export default Component11137;
