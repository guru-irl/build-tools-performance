import React from 'react';
const LABEL_38925 = 'component_38925';
export function Component38925({ value = 38925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38925, 'data-value': derived.doubled }, children);
}
export default Component38925;
