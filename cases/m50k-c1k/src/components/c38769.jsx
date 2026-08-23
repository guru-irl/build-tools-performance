import React from 'react';
const LABEL_38769 = 'component_38769';
export function Component38769({ value = 38769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38769, 'data-value': derived.doubled }, children);
}
export default Component38769;
