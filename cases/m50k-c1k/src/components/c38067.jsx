import React from 'react';
const LABEL_38067 = 'component_38067';
export function Component38067({ value = 38067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38067, 'data-value': derived.doubled }, children);
}
export default Component38067;
