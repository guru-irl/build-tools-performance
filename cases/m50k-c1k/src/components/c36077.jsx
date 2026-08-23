import React from 'react';
const LABEL_36077 = 'component_36077';
export function Component36077({ value = 36077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36077, 'data-value': derived.doubled }, children);
}
export default Component36077;
