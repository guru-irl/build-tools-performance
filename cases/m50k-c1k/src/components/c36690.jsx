import React from 'react';
const LABEL_36690 = 'component_36690';
export function Component36690({ value = 36690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36690, 'data-value': derived.doubled }, children);
}
export default Component36690;
