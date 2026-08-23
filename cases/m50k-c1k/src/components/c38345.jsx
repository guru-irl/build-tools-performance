import React from 'react';
const LABEL_38345 = 'component_38345';
export function Component38345({ value = 38345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38345, 'data-value': derived.doubled }, children);
}
export default Component38345;
