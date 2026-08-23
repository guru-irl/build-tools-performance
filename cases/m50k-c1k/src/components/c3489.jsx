import React from 'react';
const LABEL_3489 = 'component_3489';
export function Component3489({ value = 3489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3489, 'data-value': derived.doubled }, children);
}
export default Component3489;
