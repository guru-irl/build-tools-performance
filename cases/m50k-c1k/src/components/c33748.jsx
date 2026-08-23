import React from 'react';
const LABEL_33748 = 'component_33748';
export function Component33748({ value = 33748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33748, 'data-value': derived.doubled }, children);
}
export default Component33748;
