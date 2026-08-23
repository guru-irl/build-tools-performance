import React from 'react';
const LABEL_38740 = 'component_38740';
export function Component38740({ value = 38740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38740, 'data-value': derived.doubled }, children);
}
export default Component38740;
